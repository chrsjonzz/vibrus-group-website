"""
Playwright script to capture visual evidence of all 8 required views for Mission 001 UI Enhancement Pass.
Saves screenshots directly to the artifact directory and D:\\VibrusGroup Website\\public\\screenshots\\.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
import os
import asyncio
from playwright.async_api import async_playwright

OUTPUT_DIR = r"C:\Users\chrsj\.gemini\antigravity\brain\c38d7ad4-60e6-424c-a503-400829d208a0"
PUBLIC_SCREENSHOTS = r"D:\VibrusGroup Website\public\screenshots"
os.makedirs(PUBLIC_SCREENSHOTS, exist_ok=True)

async def capture_all():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        # 1. Desktop Context (1280x900)
        desktop_page = await browser.new_page(viewport={"width": 1280, "height": 900})
        
        # 1a: Homepage
        print("Capturing 1: Homepage...")
        await desktop_page.goto("http://localhost:3000/", wait_until="networkidle")
        await desktop_page.screenshot(path=os.path.join(OUTPUT_DIR, "vibrus_01_homepage.png"), full_page=False)
        await desktop_page.screenshot(path=os.path.join(PUBLIC_SCREENSHOTS, "vibrus_01_homepage.png"), full_page=False)

        # 1b: Desktop Navigation - Divisions Dropdown
        print("Capturing 2: Desktop Navigation (Divisions dropdown open)...")
        await desktop_page.click("#divisions-menu-button")
        await desktop_page.wait_for_timeout(400)
        await desktop_page.screenshot(path=os.path.join(OUTPUT_DIR, "vibrus_02_desktop_nav_divisions.png"), full_page=False)
        await desktop_page.screenshot(path=os.path.join(PUBLIC_SCREENSHOTS, "vibrus_02_desktop_nav_divisions.png"), full_page=False)

        # 1c: Desktop Navigation - Careers Dropdown (testing auto-close of divisions)
        print("Capturing 3: Desktop Navigation (Careers open, divisions auto-closed)...")
        await desktop_page.click("#careers-menu-button")
        await desktop_page.wait_for_timeout(400)
        await desktop_page.screenshot(path=os.path.join(OUTPUT_DIR, "vibrus_03_desktop_nav_careers.png"), full_page=False)
        await desktop_page.screenshot(path=os.path.join(PUBLIC_SCREENSHOTS, "vibrus_03_desktop_nav_careers.png"), full_page=False)

        # 1d: Healthcare Page
        print("Capturing 4: Healthcare Division Page...")
        await desktop_page.goto("http://localhost:3000/divisions/healthcare", wait_until="networkidle")
        await desktop_page.screenshot(path=os.path.join(OUTPUT_DIR, "vibrus_04_healthcare_page.png"), full_page=False)
        await desktop_page.screenshot(path=os.path.join(PUBLIC_SCREENSHOTS, "vibrus_04_healthcare_page.png"), full_page=False)

        # 1e: Industrial Page
        print("Capturing 5: Industrial Division Page...")
        await desktop_page.goto("http://localhost:3000/divisions/industrial", wait_until="networkidle")
        await desktop_page.screenshot(path=os.path.join(OUTPUT_DIR, "vibrus_05_industrial_page.png"), full_page=False)
        await desktop_page.screenshot(path=os.path.join(PUBLIC_SCREENSHOTS, "vibrus_05_industrial_page.png"), full_page=False)

        # 1f: Careers & 60-Second Express Apply Page
        print("Capturing 6: Apply / Careers Page...")
        await desktop_page.goto("http://localhost:3000/apply", wait_until="networkidle")
        await desktop_page.screenshot(path=os.path.join(OUTPUT_DIR, "vibrus_06_apply_page.png"), full_page=False)
        await desktop_page.screenshot(path=os.path.join(PUBLIC_SCREENSHOTS, "vibrus_06_apply_page.png"), full_page=False)

        # 1g: Facility Request Form (/employers)
        print("Capturing 7: Facility Staff Request Form (30-Minute Callback Commitment)...")
        await desktop_page.goto("http://localhost:3000/employers", wait_until="networkidle")
        await desktop_page.screenshot(path=os.path.join(OUTPUT_DIR, "vibrus_07_facility_request_form.png"), full_page=False)
        await desktop_page.screenshot(path=os.path.join(PUBLIC_SCREENSHOTS, "vibrus_07_facility_request_form.png"), full_page=False)

        await desktop_page.close()

        # 2. Mobile Context (iPhone 12 / Modern Mobile 390x844)
        print("Capturing 8: Mobile Navigation Menu...")
        mobile_page = await browser.new_page(viewport={"width": 390, "height": 844}, is_mobile=True)
        await mobile_page.goto("http://localhost:3000/", wait_until="networkidle")
        # Click mobile hamburger
        await mobile_page.click("button[aria-label='Toggle Mobile Navigation Menu']")
        await mobile_page.wait_for_timeout(400)
        await mobile_page.screenshot(path=os.path.join(OUTPUT_DIR, "vibrus_08_mobile_nav_menu.png"), full_page=False)
        await mobile_page.screenshot(path=os.path.join(PUBLIC_SCREENSHOTS, "vibrus_08_mobile_nav_menu.png"), full_page=False)
        await mobile_page.close()

        await browser.close()
        print("\nAll 8 walkthrough screenshots successfully captured!")

if __name__ == "__main__":
    asyncio.run(capture_all())
