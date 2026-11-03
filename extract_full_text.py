"""
Extract full text content from each page for the ChatGPT prompt.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
import json

data = json.load(open(r'D:\VibrusGroup Website\current_site_content.json', 'r', encoding='utf-8'))

for key, page in data['pages'].items():
    if 'error' in page:
        continue
    print(f"\n{'='*70}")
    print(f"PAGE: {page.get('title', key)}")
    print(f"URL: {page['url']}")
    print(f"META DESC: {page.get('meta_description', 'N/A')}")
    print(f"{'='*70}")
    
    # All headings
    for h in page.get('headings', []):
        print(f"  [H{h['level']}] {h['text']}")
    
    # All paragraphs (full text)
    for i, p in enumerate(page.get('paragraphs', [])):
        clean = p.replace('\n', ' ').strip()
        if clean and clean != 'Web ViewMobile View':
            print(f"  [P] {clean}")
    
    # All list items
    for item in page.get('lists', []):
        clean = item.strip()
        if clean:
            print(f"  [LI] {clean}")
    
    # Forms
    for f in page.get('forms', []):
        print(f"  [FORM] action={f.get('action','')} method={f.get('method','')}")
        for inp in f.get('inputs', []):
            print(f"    [INPUT] type={inp.get('type','')} name={inp.get('name','')} placeholder={inp.get('placeholder','')}")
    
    # Images
    for img in page.get('images', []):
        if img.get('alt'):
            print(f"  [IMG] alt='{img['alt']}' src={img['src'][:80]}")
