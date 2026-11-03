import urllib.request
import urllib.error
import re
import json
import time
from html.parser import HTMLParser

BASE_URL = "http://localhost:3000"

ROUTES = [
    {"path": "/", "name": "Homepage", "intent": "Brand & Workforce Authority", "indexable": True},
    {"path": "/employers", "name": "Employers Request", "intent": "Facility Staffing Demand", "indexable": True},
    {"path": "/apply", "name": "Express Apply", "intent": "Candidate Express Intake", "indexable": True},
    {"path": "/careers", "name": "Careers Directory", "intent": "Candidate Career Exploration", "indexable": True},
    {"path": "/careers/healthcare", "name": "Healthcare Careers", "intent": "Clinical Nursing & Allied Jobs", "indexable": True},
    {"path": "/careers/general", "name": "General Careers", "intent": "Industrial & Trade Jobs", "indexable": True},
    {"path": "/divisions", "name": "Divisions Hub", "intent": "Workforce Solutions Overview", "indexable": True},
    {"path": "/divisions/healthcare", "name": "Healthcare Division", "intent": "Clinical Hospital Staffing", "indexable": True},
    {"path": "/divisions/industrial", "name": "Industrial Division", "intent": "Warehouse & Logistics Staffing", "indexable": True},
    {"path": "/divisions/office", "name": "Office Division", "intent": "Administrative & Records Staffing", "indexable": True},
    {"path": "/divisions/professional", "name": "Professional Division", "intent": "Executive Search & Interim Leadership", "indexable": True},
    {"path": "/divisions/info-tech", "name": "IT Division", "intent": "Software & Tech Staffing", "indexable": True},
    {"path": "/divisions/hospitality", "name": "Hospitality Division", "intent": "Banquet & Culinary Staffing", "indexable": True},
    {"path": "/about", "name": "About Us", "intent": "Company Heritage & Leadership", "indexable": True},
    {"path": "/coverage", "name": "Coverage Locator", "intent": "Tri-County & Michigan Geography", "indexable": True},
    {"path": "/compliance", "name": "Compliance Standards", "intent": "Audit-Ready Credentialing Quality", "indexable": True},
    {"path": "/testimonials", "name": "Testimonials Showcase", "intent": "Client Feedback & Trust", "indexable": True},
    {"path": "/contact", "name": "Contact Warren HQ", "intent": "24/7 Dispatch & Headquarters Inquiry", "indexable": True},
    {"path": "/management-review", "name": "Management Review", "intent": "Internal Staging Review", "indexable": False},
]

LEGACY_REDIRECTS = [
    ("/about-us", "/about"),
    ("/vibrus-difference", "/about"),
    ("/divisions/healthcare-solutions", "/divisions/healthcare"),
    ("/divisions/healthcare-solutions/medical-staffing-services", "/divisions/healthcare"),
    ("/divisions/healthcare-solutions/private-duty-services", "/divisions/healthcare"),
    ("/divisions/healthcare-solutions/living-assistance-services", "/divisions/healthcare"),
    ("/divisions/healthcare-solutions/job-classifications", "/divisions/healthcare#job-classifications"),
    ("/apply-here", "/apply"),
    ("/contact-us", "/contact"),
    ("/sitemap", "/sitemap.xml"),
]

class HtmlMetadataExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.in_title = False
        self.meta_tags = []
        self.h1_tags = []
        self.h2_tags = []
        self.in_h1 = False
        self.in_h2 = False
        self.current_heading = ""
        self.canonical = ""
        self.images = []
        self.links = []

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
            self.current_heading = ""
        elif tag == "h2":
            self.in_h2 = True
            self.current_heading = ""
        elif tag == "img":
            self.images.append({
                "src": attr_dict.get("src", ""),
                "alt": attr_dict.get("alt", ""),
            })
        elif tag == "a":
            href = attr_dict.get("href", "")
            if href:
                self.links.append({
                    "href": href,
                    "text": "",
                })

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        elif tag == "h1":
            self.in_h1 = False
            if self.current_heading.strip():
                self.h1_tags.append(self.current_heading.strip())
        elif tag == "h2":
            self.in_h2 = False
            if self.current_heading.strip():
                self.h2_tags.append(self.current_heading.strip())

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        elif self.in_h1 or self.in_h2:
            self.current_heading += data

class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None  # Do not follow redirects automatically

def run_seo_audit():
    print("=" * 80)
    print("  PROJECT VIBRUS GROUP — MISSION 001.8 TECHNICAL SEO & METADATA AUDIT")
    print("=" * 80)

    audit_results = {
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "baseUrl": BASE_URL,
        "productionBase": "https://vibrusgroup.com",
        "routes": {},
        "legacyRedirects": {},
        "technicalFiles": {},
        "summary": {
            "totalRoutes": len(ROUTES),
            "passed": 0,
            "warnings": 0,
            "failed": 0,
        },
    }

    # -------------------------------------------------------------------------
    # 1. Route-by-Route Metadata Audit
    # -------------------------------------------------------------------------
    print("\n--- 1. Route-by-Route Title, Description & Heading Audit ---")
    titles_seen = set()
    descriptions_seen = set()

    for item in ROUTES:
        route = item["path"]
        name = item["name"]
        url = f"{BASE_URL}{route}"

        route_report = {
            "name": name,
            "intent": item["intent"],
            "indexable": item["indexable"],
            "statusCode": 0,
            "title": "",
            "titleLength": 0,
            "description": "",
            "descriptionLength": 0,
            "h1": [],
            "h2Count": 0,
            "canonical": "",
            "og": {},
            "twitter": {},
            "robots": "",
            "jsonLdTypes": [],
            "warnings": [],
            "status": "PASS",
        }

        try:
            req = urllib.request.Request(url, headers={"User-Agent": "VibrusSEOAudit/2.0"})
            with urllib.request.urlopen(req) as resp:
                route_report["statusCode"] = resp.getcode()
                html = resp.read().decode("utf-8")

            parser = HtmlMetadataExtractor()
            parser.feed(html)

            # Title
            title = parser.title.strip()
            route_report["title"] = title
            route_report["titleLength"] = len(title)

            # Check title format: must end with "| Vibrus Group"
            if not title.endswith("| Vibrus Group"):
                route_report["warnings"].append(f"Title does not end with '| Vibrus Group': {title}")
            
            # Check for duplicate brand suffix (e.g. "Vibrus Group LLC | Vibrus Group LLC")
            if "Vibrus Group LLC | Vibrus Group LLC" in title or "Vibrus Group | Vibrus Group" in title:
                route_report["warnings"].append(f"Duplicate brand repetition in title: {title}")

            # Check uniqueness
            if title in titles_seen:
                route_report["warnings"].append(f"Duplicate title across routes: {title}")
            titles_seen.add(title)

            # Metadata tags
            for m in parser.meta_tags:
                n = m.get("name", "").lower()
                p = m.get("property", "").lower()
                c = m.get("content", "").strip()

                if n == "description":
                    route_report["description"] = c
                    route_report["descriptionLength"] = len(c)
                elif n == "robots":
                    route_report["robots"] = c
                elif p == "og:title":
                    route_report["og"]["title"] = c
                elif p == "og:description":
                    route_report["og"]["description"] = c
                elif p == "og:url":
                    route_report["og"]["url"] = c
                elif p == "og:image":
                    route_report["og"]["image"] = c
                elif n == "twitter:card":
                    route_report["twitter"]["card"] = c

            desc = route_report["description"]
            if desc:
                if desc in descriptions_seen:
                    route_report["warnings"].append("Duplicate meta description across routes")
                descriptions_seen.add(desc)

                # Length guideline (140-165 chars)
                if len(desc) < 120 or len(desc) > 175:
                    route_report["warnings"].append(f"Description length ({len(desc)} chars) outside optimal range (140-165)")

                # Strict content governance checks
                if "30-minute" in desc.lower() and route not in ["/employers", "/"]:
                    route_report["warnings"].append("30-minute callback promise found outside employer/facility context")
                if "women-owned" in desc.lower() and route not in ["/about", "/compliance"]:
                    route_report["warnings"].append("Women-Owned badge found outside About/Compliance context")
            else:
                route_report["warnings"].append("Missing meta description")

            # Canonical
            route_report["canonical"] = parser.canonical
            if not parser.canonical.startswith("https://vibrusgroup.com"):
                route_report["warnings"].append(f"Canonical URL is not absolute production domain: {parser.canonical}")

            # Headings
            route_report["h1"] = parser.h1_tags
            route_report["h2Count"] = len(parser.h2_tags)
            if len(parser.h1_tags) == 0:
                route_report["warnings"].append("Missing <h1> tag")
            elif len(parser.h1_tags) > 1:
                route_report["warnings"].append(f"Multiple <h1> tags found: {len(parser.h1_tags)}")

            # Structured Data (JSON-LD)
            ld_json_scripts = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
            for raw_json in ld_json_scripts:
                try:
                    data = json.loads(raw_json)
                    data_type = data.get("@type", "Unknown")
                    route_report["jsonLdTypes"].append(data_type)
                except Exception:
                    route_report["warnings"].append("Malformed JSON-LD script found")

            # Status assignment
            if route_report["warnings"]:
                route_report["status"] = "WARN"
                audit_results["summary"]["warnings"] += 1
                print(f"  [WARN] {route:25} | Title: {title[:45]}... ({len(title)}c) | Warnings: {route_report['warnings']}")
            else:
                route_report["status"] = "PASS"
                audit_results["summary"]["passed"] += 1
                print(f"  [PASS] {route:25} | Title: {title:52} ({len(title)}c) | Desc: {len(desc)}c | H1: 1 | Schema: {route_report['jsonLdTypes']}")

        except Exception as e:
            route_report["status"] = "FAIL"
            route_report["warnings"].append(str(e))
            audit_results["summary"]["failed"] += 1
            print(f"  [FAIL] {route:25} | Error: {e}")

        audit_results["routes"][route] = route_report

    # -------------------------------------------------------------------------
    # 2. Legacy Permanent Redirects Audit (301/308)
    # -------------------------------------------------------------------------
    print("\n--- 2. Testing Legacy 301 Permanent Redirects ---")
    opener = urllib.request.build_opener(NoRedirectHandler)

    for src, target in LEGACY_REDIRECTS:
        test_url = f"{BASE_URL}{src}"
        redirect_info = {
            "source": src,
            "target": target,
            "statusCode": 0,
            "location": "",
            "status": "FAIL",
        }
        try:
            req = urllib.request.Request(test_url, headers={"User-Agent": "VibrusRedirectAudit/1.0"})
            resp = opener.open(req)
            redirect_info["statusCode"] = resp.getcode()
            redirect_info["status"] = "FAIL (No redirect occurred)"
        except urllib.error.HTTPError as e:
            redirect_info["statusCode"] = e.code
            redirect_info["location"] = e.headers.get("Location", "")
            if e.code in [301, 308]:
                # Next.js uses 308 for permanent redirects
                if target in redirect_info["location"]:
                    redirect_info["status"] = "PASS"
                    print(f"  [PASS] {src:45} -> {redirect_info['location']} (HTTP {e.code})")
                else:
                    redirect_info["status"] = f"WARN (Target mismatch: {redirect_info['location']})"
                    print(f"  [WARN] {src:45} -> {redirect_info['location']} (Expected {target})")
            else:
                redirect_info["status"] = f"FAIL (HTTP {e.code})"
                print(f"  [FAIL] {src:45} returned HTTP {e.code}")
        except Exception as err:
            redirect_info["status"] = f"ERROR: {err}"
            print(f"  [FAIL] {src:45} Error: {err}")

        audit_results["legacyRedirects"][src] = redirect_info

    # -------------------------------------------------------------------------
    # 3. Technical SEO Files (robots.txt & sitemap.xml)
    # -------------------------------------------------------------------------
    print("\n--- 3. Testing Technical Files (robots.txt & sitemap.xml) ---")
    
    # robots.txt
    try:
        req = urllib.request.Request(f"{BASE_URL}/robots.txt", headers={"User-Agent": "VibrusBot/1.0"})
        with urllib.request.urlopen(req) as resp:
            robots_content = resp.read().decode("utf-8")
            audit_results["technicalFiles"]["robots.txt"] = {
                "statusCode": resp.getcode(),
                "content": robots_content,
                "isStagingProtected": "Disallow: /" in robots_content,
                "status": "PASS",
            }
            print("  [PASS] /robots.txt is dynamically served:")
            for line in robots_content.strip().split("\n"):
                print(f"         {line}")
    except Exception as e:
        audit_results["technicalFiles"]["robots.txt"] = {"error": str(e), "status": "FAIL"}
        print(f"  [FAIL] /robots.txt error: {e}")

    # sitemap.xml
    try:
        req = urllib.request.Request(f"{BASE_URL}/sitemap.xml", headers={"User-Agent": "VibrusBot/1.0"})
        with urllib.request.urlopen(req) as resp:
            sitemap_content = resp.read().decode("utf-8")
            audit_results["technicalFiles"]["sitemap.xml"] = {
                "statusCode": resp.getcode(),
                "contentPreview": sitemap_content[:200],
                "status": "PASS",
            }
            print("  [PASS] /sitemap.xml is accessible with HTTP 200")
    except Exception as e:
        audit_results["technicalFiles"]["sitemap.xml"] = {"error": str(e), "status": "FAIL"}
        print(f"  [FAIL] /sitemap.xml error: {e}")

    # -------------------------------------------------------------------------
    # 4. Save Machine-Readable Output
    # -------------------------------------------------------------------------
    output_path = r"D:\VibrusGroup Website\seo_audit_results.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(audit_results, f, indent=2)
    print(f"\nSaved machine-readable SEO audit to: {output_path}")

    print("\n" + "=" * 80)
    print(f"  AUDIT SUMMARY: {audit_results['summary']['passed']} Passed | {audit_results['summary']['warnings']} Warnings | {audit_results['summary']['failed']} Failed")
    print("=" * 80)

if __name__ == "__main__":
    run_seo_audit()
