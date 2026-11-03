import json

with open('seo_audit_certified.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print('=== AUDIT VERIFICATION SUMMARY ===')
print(f'Total Routes Audited: {len(data["route_details"])}')
missing_alts = []
for r in data['route_details']:
    if r['images_missing_alt'] > 0:
        missing_alts.append((r['path'], r['images_missing_alt']))

print(f'Routes with missing image alts: {missing_alts}')
print(f'Routes with single H1: {sum(1 for r in data["route_details"] if r["h1_count"] == 1)}/19')
print(f'Titles valid format: {sum(1 for r in data["route_details"] if r["title_format_valid"])}/19')
print(f'Descriptions valid length (140-165): {sum(1 for r in data["route_details"] if r["description_range_valid"])}/19')
print(f'Duplicate Titles: {len(data["duplicate_titles"])}')
print(f'Duplicate Descriptions: {len(data["duplicate_descriptions"])}')
print(f'Redirects 308 valid: {sum(1 for r in data["redirect_audit"] if r["valid"])}/{len(data["redirect_audit"])}')
print(f'Unapproved in schema: {len(data["unapproved_in_schema"])}')

print('\n=== ROUTE-BY-ROUTE VERIFICATION ===')
for r in data['route_details']:
    h1 = r["h1_texts"][0] if r["h1_texts"] else "MISSING"
    print(f'{r["path"]}:')
    print(f'  Title ({r["title_length"]} chars): {r["title"]}')
    print(f'  H1: {h1}')
    print(f'  Desc ({r["description_length"]} chars): {r["description"][:80]}...')
    print(f'  Canonical: {r["canonical_url"] or "[None - Local/Staging Guard active]"}')
    print(f'  Robots: {r["robots_meta"] or r["x_robots_header"]}')
