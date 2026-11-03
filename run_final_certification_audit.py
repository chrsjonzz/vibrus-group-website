import urllib.request
import urllib.parse
import http.client
import json
import re
import sys
from bs4 import BeautifulSoup

BASE_URL = "http://localhost:3000"

ROUTES = [
    "/",
    "/about",
    "/apply",
    "/careers",
    "/careers/healthcare",
    "/careers/general",
    "/compliance",
    "/contact",
    "/coverage",
    "/divisions",
    "/divisions/healthcare",
    "/divisions/industrial",
    "/divisions/office",
    "/divisions/professional",
    "/divisions/info-tech",
    "/divisions/hospitality",
    "/employers",
    "/management-review",
    "/testimonials"
]

REDIRECT_TESTS = [
    ("/jobs", "/careers"),
    ("/job-seekers", "/careers"),
    ("/candidates", "/careers"),
    ("/staffing", "/employers"),
    ("/services", "/divisions"),
    ("/medical-staffing", "/divisions/healthcare"),
    ("/industrial-staffing", "/divisions/industrial"),
    ("/it-staffing", "/divisions/info-tech"),
    ("/office-staffing", "/divisions/office"),
    ("/hospitality-staffing", "/divisions/hospitality"),
]

def fetch_url(path, follow_redirects=True):
    url = f"{BASE_URL}{path}"
    req = urllib.request.Request(url, headers={"User-Agent": "SEO-Certification-Audit-Bot/1.0"})
    
    if not follow_redirects:
        # Custom HTTP handler to avoid following redirects
        class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
            def http_error_301(self, req, fp, code, msg, headers):
                return fp
            def http_error_302(self, req, fp, code, msg, headers):
                return fp
            def http_error_307(self, req, fp, code, msg, headers):
                return fp
            def http_error_308(self, req, fp, code, msg, headers):
                return fp
        opener = urllib.request.build_opener(NoRedirectHandler)
        try:
            resp = opener.open(req)
            return resp.status, resp.headers, resp.read().decode('utf-8', errors='ignore')
        except urllib.error.HTTPError as e:
            return e.code, e.headers, e.read().decode('utf-8', errors='ignore')
        except Exception as e:
            return 500, {}, str(e)
    else:
        try:
            with urllib.request.urlopen(req) as resp:
                return resp.status, resp.headers, resp.read().decode('utf-8', errors='ignore')
        except urllib.error.HTTPError as e:
            return e.code, e.headers, e.read().decode('utf-8', errors='ignore')
        except Exception as e:
            return 500, {}, str(e)

def audit_routes():
    route_results = []
    all_titles = {}
    all_descriptions = {}

    for path in ROUTES:
        status, headers, html = fetch_url(path, follow_redirects=True)
        soup = BeautifulSoup(html, 'html.parser')

        # 1. Title
        title_tag = soup.find('title')
        title_text = title_tag.get_text().strip() if title_tag else ""
        title_len = len(title_text)
        
        # 2. Description
        desc_tag = soup.find('meta', attrs={'name': 'description'})
        desc_text = desc_tag['content'].strip() if desc_tag and desc_tag.get('content') else ""
        desc_len = len(desc_text)

        # 3. Headings
        h1_tags = [h.get_text().strip() for h in soup.find_all('h1')]
        h2_tags = [h.get_text().strip() for h in soup.find_all('h2')]
        h3_tags = [h.get_text().strip() for h in soup.find_all('h3')]

        # 4. Canonical & Robots
        canonical_tag = soup.find('link', rel='canonical')
        canonical_url = canonical_tag['href'] if canonical_tag and canonical_tag.get('href') else ""
        
        robots_tag = soup.find('meta', attrs={'name': 'robots'})
        robots_content = robots_tag['content'] if robots_tag and robots_tag.get('content') else ""

        # 5. OpenGraph
        og = {}
        for prop in ['title', 'description', 'url', 'image', 'type', 'site_name']:
            meta = soup.find('meta', property=f'og:{prop}')
            og[prop] = meta['content'] if meta and meta.get('content') else None

        # 6. Twitter Card
        twitter = {}
        for prop in ['card', 'title', 'description', 'image']:
            meta = soup.find('meta', attrs={'name': f'twitter:{prop}'})
            twitter[prop] = meta['content'] if meta and meta.get('content') else None

        # 7. HTML lang & viewport
        html_tag = soup.find('html')
        lang = html_tag.get('lang') if html_tag else None
        viewport_tag = soup.find('meta', attrs={'name': 'viewport'})
        viewport = viewport_tag.get('content') if viewport_tag else None

        # 8. Structured Data (JSON-LD)
        json_ld_scripts = soup.find_all('script', type='application/ld+json')
        parsed_json_ld = []
        for s in json_ld_scripts:
            try:
                parsed_json_ld.append(json.loads(s.string))
            except Exception as e:
                parsed_json_ld.append({"error": str(e), "raw": s.string})

        # 9. Images alt check
        images = soup.find_all('img')
        img_audit = []
        for img in images:
            src = img.get('src', '')
            alt = img.get('alt', '')
            img_audit.append({'src': src, 'alt': alt, 'has_alt': bool(alt.strip())})

        # Duplicate tracking
        if title_text:
            all_titles.setdefault(title_text, []).append(path)
        if desc_text:
            all_descriptions.setdefault(desc_text, []).append(path)

        res = {
            "path": path,
            "http_status": status,
            "title": title_text,
            "title_length": title_len,
            "title_format_valid": title_text.endswith(" | Vibrus Group") or title_text == "Vibrus Group",
            "description": desc_text,
            "description_length": desc_len,
            "description_range_valid": (140 <= desc_len <= 165),
            "h1_count": len(h1_tags),
            "h1_texts": h1_tags,
            "h2_count": len(h2_tags),
            "canonical_url": canonical_url,
            "robots_meta": robots_content,
            "x_robots_header": headers.get('x-robots-tag'),
            "og_tags": og,
            "twitter_tags": twitter,
            "html_lang": lang,
            "viewport": viewport,
            "json_ld_count": len(parsed_json_ld),
            "json_ld": parsed_json_ld,
            "images_total": len(img_audit),
            "images_missing_alt": sum(1 for i in img_audit if not i['has_alt'])
        }
        route_results.append(res)

    return route_results, all_titles, all_descriptions

def audit_redirects():
    results = []
    for source, target in REDIRECT_TESTS:
        status, headers, body = fetch_url(source, follow_redirects=False)
        location = headers.get('location', '')
        
        # Now verify target status
        target_status, _, _ = fetch_url(target, follow_redirects=True)
        
        is_308 = (status == 308)
        correct_target = (location == target)
        target_healthy = (target_status == 200)

        results.append({
            "source": source,
            "expected_target": target,
            "status_code": status,
            "location_header": location,
            "is_308_permanent": is_308,
            "correct_target": correct_target,
            "target_reaches_200": target_healthy,
            "valid": is_308 and correct_target and target_healthy
        })
    return results

def audit_robots_and_sitemap():
    robots_status, robots_headers, robots_body = fetch_url("/robots.txt", follow_redirects=True)
    sitemap_status, sitemap_headers, sitemap_body = fetch_url("/sitemap.xml", follow_redirects=True)
    
    return {
        "robots_txt": {
            "status": robots_status,
            "content_type": robots_headers.get('content-type', ''),
            "body": robots_body
        },
        "sitemap_xml": {
            "status": sitemap_status,
            "content_type": sitemap_headers.get('content-type', ''),
            "body": sitemap_body
        }
    }

def main():
    print("Executing Final SEO Certification Audit...")
    route_results, all_titles, all_descriptions = audit_routes()
    redirect_results = audit_redirects()
    robots_sitemap = audit_robots_and_sitemap()

    duplicate_titles = {t: paths for t, paths in all_titles.items() if len(paths) > 1}
    duplicate_descriptions = {d: paths for d, paths in all_descriptions.items() if len(paths) > 1}

    # Verify claim compliance in JSON-LD across all routes
    unapproved_in_schema = []
    banned_keywords = ["info@vibrusgroup.com", "OSHA", "ServSafe", "10-panel", "OIG", "6-point", "immediate dispatch"]
    for r in route_results:
        raw_str = json.dumps(r['json_ld'])
        for b in banned_keywords:
            if b.lower() in raw_str.lower():
                unapproved_in_schema.append({"path": r['path'], "keyword": b})

    report = {
        "audit_timestamp": "2026-11-03T20:50:00Z",
        "audit_version": "Mission 001.8 Final Certification Pass",
        "environment_inspected": "Local Next.js Production Build (Port 3000)",
        "summary": {
            "routes_total": len(route_results),
            "routes_http_200": sum(1 for r in route_results if r['http_status'] == 200),
            "titles_valid_format": sum(1 for r in route_results if r['title_format_valid']),
            "titles_duplicate_count": len(duplicate_titles),
            "descriptions_in_range_140_165": sum(1 for r in route_results if r['description_range_valid']),
            "descriptions_duplicate_count": len(duplicate_descriptions),
            "single_h1_routes": sum(1 for r in route_results if r['h1_count'] == 1),
            "html_lang_en_routes": sum(1 for r in route_results if r['html_lang'] == 'en'),
            "viewport_present_routes": sum(1 for r in route_results if r['viewport'] is not None),
            "redirects_total": len(redirect_results),
            "redirects_308_valid": sum(1 for r in redirect_results if r['valid']),
            "unapproved_keywords_in_schema": len(unapproved_in_schema)
        },
        "duplicate_titles": duplicate_titles,
        "duplicate_descriptions": duplicate_descriptions,
        "unapproved_in_schema": unapproved_in_schema,
        "redirect_audit": redirect_results,
        "robots_and_sitemap": robots_sitemap,
        "route_details": route_results
    }

    with open("D:/VibrusGroup Website/seo_audit_certified.json", "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2)

    print(f"Certification audit completed! Saved to seo_audit_certified.json")
    print(f"Routes: {report['summary']['routes_http_200']}/{report['summary']['routes_total']} HTTP 200")
    print(f"Redirects: {report['summary']['redirects_308_valid']}/{report['summary']['redirects_total']} 308 Permanent")
    print(f"Duplicate Titles: {report['summary']['titles_duplicate_count']}")
    print(f"Duplicate Descriptions: {report['summary']['descriptions_duplicate_count']}")
    print(f"Single H1: {report['summary']['single_h1_routes']}/{report['summary']['routes_total']}")
    print(f"Unapproved in Schema: {report['summary']['unapproved_keywords_in_schema']}")

if __name__ == "__main__":
    main()
