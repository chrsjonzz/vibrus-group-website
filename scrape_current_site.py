"""
Vibrus Group - Full Website Content Extraction Script
Scrapes all pages of vibrusgroup.com and saves structured JSON.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')

import urllib.request
import urllib.error
import json
import re
import os
import ssl
from html.parser import HTMLParser
from datetime import datetime

# --- Configuration ---
BASE_URL = "https://www.vibrusgroup.com"
OUTPUT_FILE = r"D:\VibrusGroup Website\current_site_content.json"

# All known pages from the sitemap/link discovery
PAGES = [
    "/",
    "/about-us/",
    "/vibrus-difference/",
    "/divisions/",
    "/divisions/healthcare-solutions/",
    "/divisions/healthcare-solutions/medical-staffing-services/",
    "/divisions/healthcare-solutions/private-duty-services/",
    "/divisions/healthcare-solutions/living-assistance-services/",
    "/divisions/healthcare-solutions/job-classifications/",
    "/divisions/office/",
    "/divisions/professional/",
    "/divisions/info-tech/",
    "/divisions/industrial/",
    "/divisions/hospitality/",
    "/careers/",
    "/careers/healthcare-careers/",
    "/careers/general-careers/",
    "/apply-here/",
    "/testimonials/",
    "/contact-us/",
    "/sitemap/",
]

# --- Custom HTML Parser ---
class ContentExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.meta_description = ""
        self.meta_keywords = ""
        self.headings = []  # (level, text)
        self.paragraphs = []
        self.links = []  # (href, text)
        self.images = []  # (src, alt)
        self.lists = []
        self.all_text_blocks = []
        self.forms = []
        
        # State tracking
        self._in_title = False
        self._in_heading = False
        self._heading_level = 0
        self._heading_text = ""
        self._in_p = False
        self._p_text = ""
        self._in_a = False
        self._a_href = ""
        self._a_text = ""
        self._in_li = False
        self._li_text = ""
        self._in_script = False
        self._in_style = False
        self._in_form = False
        self._form_data = {}
        self._current_text = ""
        self._in_span = False
        self._span_text = ""
        self._in_div = False
        self._div_depth = 0
        self._div_text = ""
        
    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        
        if tag == "title":
            self._in_title = True
            self._current_text = ""
        elif tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self._in_heading = True
            self._heading_level = int(tag[1])
            self._heading_text = ""
        elif tag == "p":
            self._in_p = True
            self._p_text = ""
        elif tag == "a":
            self._in_a = True
            self._a_href = attrs_dict.get("href", "")
            self._a_text = ""
        elif tag == "img":
            src = attrs_dict.get("src", "")
            alt = attrs_dict.get("alt", "")
            self.images.append({"src": src, "alt": alt})
        elif tag == "meta":
            name = attrs_dict.get("name", "").lower()
            content = attrs_dict.get("content", "")
            if name == "description":
                self.meta_description = content
            elif name == "keywords":
                self.meta_keywords = content
        elif tag == "li":
            self._in_li = True
            self._li_text = ""
        elif tag == "script":
            self._in_script = True
        elif tag == "style":
            self._in_style = True
        elif tag == "form":
            self._in_form = True
            self._form_data = {
                "action": attrs_dict.get("action", ""),
                "method": attrs_dict.get("method", ""),
                "inputs": []
            }
        elif tag == "input" and self._in_form:
            self._form_data["inputs"].append({
                "type": attrs_dict.get("type", ""),
                "name": attrs_dict.get("name", ""),
                "placeholder": attrs_dict.get("placeholder", ""),
                "value": attrs_dict.get("value", ""),
            })
        elif tag == "textarea" and self._in_form:
            self._form_data["inputs"].append({
                "type": "textarea",
                "name": attrs_dict.get("name", ""),
                "placeholder": attrs_dict.get("placeholder", ""),
            })
        elif tag == "span":
            self._in_span = True
            self._span_text = ""
            
    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
            self.title = self._current_text.strip()
        elif tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self._in_heading = False
            text = self._heading_text.strip()
            if text:
                self.headings.append({"level": self._heading_level, "text": text})
                self.all_text_blocks.append({"type": f"h{self._heading_level}", "text": text})
        elif tag == "p":
            self._in_p = False
            text = self._p_text.strip()
            if text:
                self.paragraphs.append(text)
                self.all_text_blocks.append({"type": "paragraph", "text": text})
        elif tag == "a":
            self._in_a = False
            text = self._a_text.strip()
            if self._a_href or text:
                self.links.append({"href": self._a_href, "text": text})
        elif tag == "li":
            self._in_li = False
            text = self._li_text.strip()
            if text:
                self.lists.append(text)
                self.all_text_blocks.append({"type": "list_item", "text": text})
        elif tag == "script":
            self._in_script = False
        elif tag == "style":
            self._in_style = False
        elif tag == "form":
            self._in_form = False
            if self._form_data:
                self.forms.append(self._form_data)
        elif tag == "span":
            self._in_span = False
            text = self._span_text.strip()
            if text and len(text) > 2:
                self.all_text_blocks.append({"type": "span", "text": text})
                
    def handle_data(self, data):
        if self._in_script or self._in_style:
            return
        text = data.strip()
        if self._in_title:
            self._current_text += data
        if self._in_heading:
            self._heading_text += data
        if self._in_p:
            self._p_text += data
        if self._in_a:
            self._a_text += data
        if self._in_li:
            self._li_text += data
        if self._in_span:
            self._span_text += data
        # Also capture floating text (not in specific tags but still visible)
        if text and not self._in_script and not self._in_style:
            if not any([self._in_title, self._in_heading, self._in_p, self._in_li]):
                if len(text) > 3:  # Skip tiny fragments
                    self.all_text_blocks.append({"type": "text", "text": text})


def fetch_page(url):
    """Fetch a page with proper headers and SSL handling."""
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
    }
    
    req = urllib.request.Request(url, headers=headers)
    try:
        response = urllib.request.urlopen(req, timeout=30, context=ctx)
        content_type = response.headers.get('Content-Type', '')
        encoding = 'utf-8'
        if 'charset=' in content_type:
            encoding = content_type.split('charset=')[-1].strip()
        html = response.read().decode(encoding, errors='replace')
        return html, response.status
    except urllib.error.HTTPError as e:
        print(f"  HTTP Error {e.code}: {url}")
        return None, e.code
    except urllib.error.URLError as e:
        print(f"  URL Error: {url} - {e.reason}")
        return None, 0
    except Exception as e:
        print(f"  Error: {url} - {str(e)}")
        return None, 0


def extract_page_content(html, url):
    """Parse HTML and extract structured content."""
    parser = ContentExtractor()
    parser.feed(html)
    
    # Deduplicate text blocks
    seen_texts = set()
    unique_blocks = []
    for block in parser.all_text_blocks:
        if block["text"] not in seen_texts:
            seen_texts.add(block["text"])
            unique_blocks.append(block)
    
    # Resolve relative links and image URLs
    resolved_links = []
    for link in parser.links:
        href = link["href"]
        if href and not href.startswith(("http", "mailto:", "tel:", "#", "javascript:")):
            if href.startswith("/"):
                href = BASE_URL + href
            else:
                href = BASE_URL + "/" + href
        resolved_links.append({"href": href, "text": link["text"]})
    
    resolved_images = []
    for img in parser.images:
        src = img["src"]
        if src and not src.startswith("http"):
            if src.startswith("/"):
                src = BASE_URL + src
            elif src.startswith("//"):
                src = "https:" + src
            else:
                src = BASE_URL + "/" + src
        resolved_images.append({"src": src, "alt": img["alt"]})
    
    return {
        "url": url,
        "title": parser.title,
        "meta_description": parser.meta_description,
        "meta_keywords": parser.meta_keywords,
        "headings": parser.headings,
        "paragraphs": parser.paragraphs,
        "text_blocks": unique_blocks,
        "links": resolved_links,
        "images": resolved_images,
        "lists": parser.lists,
        "forms": parser.forms,
        "raw_html_length": len(html),
    }


def main():
    print("=" * 70)
    print("  VIBRUS GROUP - Full Website Content Extraction")
    print(f"  Target: {BASE_URL}")
    print(f"  Pages to scrape: {len(PAGES)}")
    print(f"  Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 70)
    
    results = {
        "extraction_date": datetime.now().isoformat(),
        "base_url": BASE_URL,
        "total_pages": len(PAGES),
        "pages": {},
        "all_unique_images": [],
        "all_unique_links": [],
        "navigation_structure": [],
        "site_summary": {}
    }
    
    all_images_set = set()
    all_links_set = set()
    success_count = 0
    fail_count = 0
    
    for i, path in enumerate(PAGES, 1):
        url = BASE_URL + path
        page_key = path if path != "/" else "homepage"
        print(f"\n[{i}/{len(PAGES)}] Scraping: {url}")
        
        html, status = fetch_page(url)
        
        if html:
            content = extract_page_content(html, url)
            results["pages"][page_key] = content
            success_count += 1
            
            # Collect unique images and links
            for img in content["images"]:
                if img["src"]:
                    all_images_set.add(img["src"])
            for link in content["links"]:
                if link["href"]:
                    all_links_set.add(link["href"])
            
            print(f"  OK | Title: {content['title'][:60]}")
            print(f"     | Headings: {len(content['headings'])} | Paragraphs: {len(content['paragraphs'])} | Images: {len(content['images'])} | Links: {len(content['links'])}")
        else:
            results["pages"][page_key] = {"url": url, "error": f"Failed with status {status}"}
            fail_count += 1
            print(f"  FAILED | Status: {status}")
    
    # Compile unique assets
    results["all_unique_images"] = sorted(list(all_images_set))
    results["all_unique_links"] = sorted(list(all_links_set))
    
    # Site summary
    results["site_summary"] = {
        "pages_scraped_successfully": success_count,
        "pages_failed": fail_count,
        "total_unique_images": len(all_images_set),
        "total_unique_links": len(all_links_set),
    }
    
    # Save JSON
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print("\n" + "=" * 70)
    print(f"  EXTRACTION COMPLETE")
    print(f"  Pages OK: {success_count} | Failed: {fail_count}")
    print(f"  Unique Images: {len(all_images_set)}")
    print(f"  Unique Links: {len(all_links_set)}")
    print(f"  Output: {OUTPUT_FILE}")
    print(f"  File Size: {os.path.getsize(OUTPUT_FILE):,} bytes")
    print("=" * 70)


if __name__ == "__main__":
    main()
