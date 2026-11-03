import urllib.request
import re
import json
from html.parser import HTMLParser

BASE_URL = "http://localhost:3000"

ROUTES = [
    "/",
    "/about",
    "/employers",
    "/apply",
    "/careers",
    "/careers/healthcare",
    "/careers/general",
    "/divisions",
    "/divisions/healthcare",
    "/divisions/industrial",
    "/divisions/office",
    "/divisions/professional",
    "/divisions/info-tech",
    "/divisions/hospitality",
    "/coverage",
    "/compliance",
    "/testimonials",
    "/contact",
    "/management-review",
]

class MetaExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.in_title = False
        self.meta_tags = []
        self.h1_tags = []
        self.in_h1 = False
        self.current_h1 = ""
        self.canonical = ""

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        if tag == "title":
            self.in_title = True
        elif tag == "meta":
            self.meta_tags.append(attr_dict)
        elif tag == "link" and attr_dict.get("rel") == "canonical":
            self.canonical = attr_dict.get("href", "")
        elif tag == "h1":
            self.in_h1 = True
            self.current_h1 = ""

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        elif tag == "h1":
            self.in_h1 = False
            if self.current_h1.strip():
                self.h1_tags.append(self.current_h1.strip())

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        elif self.in_h1:
            self.current_h1 += data

def extract_seo():
    results = {}
    for route in ROUTES:
        url = f"{BASE_URL}{route}"
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "VibrusSEOAuditBot/1.0"})
            with urllib.request.urlopen(req) as resp:
                html = resp.read().decode("utf-8")
                
            parser = MetaExtractor()
            parser.feed(html)

            # Extract key properties
            desc = ""
            keywords = ""
            og_title = ""
            og_desc = ""
            og_url = ""
            og_type = ""
            og_site_name = ""
            twitter_card = ""
            robots = ""

            for m in parser.meta_tags:
                name = m.get("name", "").lower()
                prop = m.get("property", "").lower()
                content = m.get("content", "")

                if name == "description":
                    desc = content
                elif name == "keywords":
                    keywords = content
                elif name == "robots":
                    robots = content
                elif prop == "og:title":
                    og_title = content
                elif prop == "og:description":
                    og_desc = content
                elif prop == "og:url":
                    og_url = content
                elif prop == "og:type":
                    og_type = content
                elif prop == "og:site_name":
                    og_site_name = content
                elif name == "twitter:card":
                    twitter_card = content

            # Check for JSON-LD structured data
            ld_json_scripts = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)

            results[route] = {
                "route": route,
                "title": parser.title.strip(),
                "description": desc,
                "keywords": keywords,
                "canonical": parser.canonical,
                "h1": parser.h1_tags,
                "og": {
                    "title": og_title,
                    "description": og_desc,
                    "url": og_url,
                    "type": og_type,
                    "site_name": og_site_name,
                },
                "twitter": {
                    "card": twitter_card,
                },
                "robots": robots,
                "json_ld_count": len(ld_json_scripts),
            }
        except Exception as e:
            results[route] = {"error": str(e)}

    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    extract_seo()
