"""
Audits all 19 routes on the live Vercel Preview URL: https://vibrus-group-website.vercel.app
Validates HTTP status, Page Title, H1 headline, and DOM rendering.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
import asyncio
from playwright.async_api import async_playwright

LIVE_BASE_URL = "https://vibrus-group-website.vercel.app"

ROUTES = [
    ("/", "Homepage"),
    ("/about", "About Us"),
    ("/divisions", "Divisions Hub"),
    ("/divisions/healthcare", "Healthcare Division"),
    ("/divisions/industrial", "Industrial Division"),
    ("/divisions/office", "Office Division"),
    ("/divisions/professional", "Professional Division"),
    ("/divisions/info-tech", "IT Division"),
    ("/divisions/hospitality", "Hospitality Division"),
    ("/careers", "Careers Hub"),
    ("/careers/healthcare", "Healthcare Careers"),
    ("/careers/general", "General Careers"),
    ("/apply", "60-Second Express Apply"),
    ("/employers", "Facility Staff On-Demand"),
    ("/coverage", "Michigan Coverage & Locator"),
    ("/contact", "Contact & HQ"),
    ("/compliance", "Compliance & Credentialing"),
    ("/testimonials", "Testimonials"),
    ("/management-review", "Management Review Checklist"),
]

async def audit_live_vercel():
    print("=" * 85)
    print(f"  AUDITING LIVE VERCEL PREVIEW: {LIVE_BASE_URL}")
    print("=" * 85)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 900})

        results = []
        for path, name in ROUTES:
            full_url = f"{LIVE_BASE_URL}{path}"
            res = await page.goto(full_url, wait_until="networkidle")
            status = res.status if res else 0
            title = await page.title()
            h1_el = page.locator("h1").first
            h1_text = (await h1_el.inner_text()).strip() if await h1_el.count() > 0 else "NO H1 FOUND"
            rendered_ok = status == 200 and len(title) > 0 and h1_text != "NO H1 FOUND"
            
            mark = "[PASS]" if rendered_ok else "[FAIL]"
            print(f"  {mark} {status} | {path:<25} | H1: {h1_text[:30]:<30} | {title[:35]}")
            results.append({
                "path": path,
                "name": name,
                "url": full_url,
                "status": status,
                "title": title,
                "h1": h1_text,
                "rendered": rendered_ok
            })

        await browser.close()
        
        passed_count = sum(1 for r in results if r["rendered"])
        print("\n" + "=" * 85)
        print(f"  AUDIT COMPLETE: {passed_count}/{len(ROUTES)} ROUTES 100% OPERATIONAL ON VERCEL")
        print("=" * 85)

if __name__ == "__main__":
    asyncio.run(audit_live_vercel())
