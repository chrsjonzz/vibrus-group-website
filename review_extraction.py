import sys
sys.stdout.reconfigure(encoding='utf-8')
import json

data = json.load(open(r'D:\VibrusGroup Website\current_site_content.json', 'r', encoding='utf-8'))

print("=" * 70)
print("  VIBRUS GROUP WEBSITE - EXTRACTION SUMMARY")
print("=" * 70)

print(f"\n  Extraction Date: {data['extraction_date']}")
print(f"  Pages Scraped: {data['site_summary']['pages_scraped_successfully']}")
print(f"  Pages Failed: {data['site_summary']['pages_failed']}")
print(f"  Unique Images: {data['site_summary']['total_unique_images']}")
print(f"  Unique Links: {data['site_summary']['total_unique_links']}")

print("\n" + "-" * 70)
print(f"  {'PAGE':<55} {'H':>3} {'P':>3} {'I':>3} {'L':>3} {'F':>3} {'TB':>4}")
print("-" * 70)

for key, page in data['pages'].items():
    if 'error' in page:
        print(f"  {key:<55} ERROR: {page['error']}")
    else:
        h = len(page.get('headings', []))
        p = len(page.get('paragraphs', []))
        i = len(page.get('images', []))
        l = len(page.get('links', []))
        f = len(page.get('forms', []))
        tb = len(page.get('text_blocks', []))
        print(f"  {key:<55} {h:>3} {p:>3} {i:>3} {l:>3} {f:>3} {tb:>4}")

print("-" * 70)

# Key content from each page
print("\n" + "=" * 70)
print("  KEY CONTENT BY PAGE")
print("=" * 70)

for key, page in data['pages'].items():
    if 'error' in page:
        continue
    print(f"\n--- {page.get('title', key)} ---")
    print(f"  URL: {page['url']}")
    if page.get('meta_description'):
        print(f"  Meta: {page['meta_description'][:100]}")
    # Print headings
    for h in page.get('headings', []):
        print(f"  H{h['level']}: {h['text'][:80]}")
    # Print first 3 paragraphs
    for i, p in enumerate(page.get('paragraphs', [])[:3]):
        text = p.replace('\n', ' ')[:120]
        print(f"  P{i+1}: {text}...")
    # Print forms
    for f in page.get('forms', []):
        print(f"  FORM: action={f.get('action','')} method={f.get('method','')}")
        for inp in f.get('inputs', []):
            print(f"    Input: type={inp.get('type','')} name={inp.get('name','')} placeholder={inp.get('placeholder','')}")

# All unique images
print("\n" + "=" * 70)
print("  ALL UNIQUE IMAGES")
print("=" * 70)
for img in data['all_unique_images']:
    print(f"  {img}")

print("\n" + "=" * 70)
print("  NAVIGATION LINKS (from homepage)")
print("=" * 70)
homepage = data['pages'].get('homepage', {})
for link in homepage.get('links', []):
    if link.get('text') and link.get('href'):
        print(f"  {link['text']:<40} -> {link['href']}")
