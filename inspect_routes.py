import os
import re

app_dir = r"D:\VibrusGroup Website\app"
routes = []

for root, dirs, files in os.walk(app_dir):
    if "page.tsx" in files:
        rel = os.path.relpath(root, app_dir).replace("\\", "/")
        route = "/" if rel == "." else "/" + rel
        filepath = os.path.join(root, "page.tsx")
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # If page.tsx has no title, check layout.tsx in same directory
        layout_path = os.path.join(root, "layout.tsx")
        if 'title:' not in content and os.path.exists(layout_path):
            with open(layout_path, "r", encoding="utf-8") as lf:
                content = lf.read()

        title_m = re.search(r'title:\s*["\']([^"\']+)["\']', content)
        desc_m = re.search(r'description:\s*\n?\s*["\']([^"\']+)["\']', content)
        noindex_m = re.search(r'noIndex:\s*(true|false)', content)

        title = title_m.group(1) if title_m else "NO_TITLE"
        desc = desc_m.group(1) if desc_m else "NO_DESC"
        noindex = noindex_m.group(1) if noindex_m else "false"

        routes.append((route, title, desc, noindex))

routes.sort()
print(f"Found {len(routes)} routes:\n")
for r, t, d, ni in routes:
    full_title = f"{t} | Vibrus Group"
    print(f"Route: {r}")
    print(f"  Raw Title: '{t}'")
    print(f"  Final Title ({len(full_title)} chars): '{full_title}'")
    print(f"  Description ({len(d)} chars): '{d}'")
    print(f"  noIndex: {ni}")
    print()
