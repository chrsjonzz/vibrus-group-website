import sys
sys.stdout.reconfigure(encoding='utf-8')
import urllib.request

req = urllib.request.urlopen('http://localhost:3000/')
print("=== SECURITY HEADERS ===")
for k, v in req.headers.items():
    if any(k.lower().startswith(p) for p in ['x-', 'strict', 'referrer', 'content-type']):
        print(f"  {k}: {v}")

html = req.read().decode('utf-8')
print("\n=== SEO & TRUST SIGNALS CHECK ===")
print("  Title tag present:", "<title>" in html)
print("  Meta description present:", 'name="description"' in html)
print("  WMBE badge present:", "Women-Owned Minority" in html)
print("  30-Minute callback present:", "30-minute" in html.lower() or "30-min" in html.lower())
print("  Zero 39-Minute references:", "39-minute" not in html.lower() and "39-min" not in html.lower())
print("  600+ credentialed staff present:", "600+" in html)
print("  24/7 dispatch present:", "24/7" in html)
print("  Warren, MI presence:", "Warren" in html)
print("  Logo image rendered:", "vibrus-logo.jpg" in html)
