"""
Download all images from the current vibrusgroup.com site.
Saves them to D:\VibrusGroup Website\assets\current_images\
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import os
import urllib.request
import ssl
from urllib.parse import urlparse

INPUT_FILE = r"D:\VibrusGroup Website\current_site_content.json"
OUTPUT_DIR = r"D:\VibrusGroup Website\assets\current_images"

os.makedirs(OUTPUT_DIR, exist_ok=True)

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
}

data = json.load(open(INPUT_FILE, 'r', encoding='utf-8'))
images = data.get('all_unique_images', [])

print(f"Total unique images to download: {len(images)}")
print(f"Output directory: {OUTPUT_DIR}")
print("-" * 60)

success = 0
failed = 0
skipped = 0

for i, url in enumerate(images, 1):
    if not url or not url.startswith('http'):
        skipped += 1
        continue
    
    # Create a clean filename
    parsed = urlparse(url)
    path_parts = parsed.path.strip('/').replace('/', '_')
    # Remove query params for filename
    filename = path_parts if path_parts else f"image_{i}"
    # Ensure it has an extension
    if not any(filename.lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico']):
        filename += '.jpg'
    
    filepath = os.path.join(OUTPUT_DIR, filename)
    
    try:
        req = urllib.request.Request(url, headers=headers)
        response = urllib.request.urlopen(req, timeout=15, context=ctx)
        img_data = response.read()
        
        with open(filepath, 'wb') as f:
            f.write(img_data)
        
        print(f"  [{i}/{len(images)}] OK ({len(img_data):,} bytes) -> {filename}")
        success += 1
    except Exception as e:
        print(f"  [{i}/{len(images)}] FAIL: {url[:60]}... - {str(e)[:50]}")
        failed += 1

print("-" * 60)
print(f"Done! Success: {success} | Failed: {failed} | Skipped: {skipped}")
