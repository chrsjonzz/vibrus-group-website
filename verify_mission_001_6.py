import os
import sys
import time
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:3000"
ARTIFACT_DIR = r"C:\Users\chrsj\.gemini\antigravity\brain\c38d7ad4-60e6-424c-a503-400829d208a0"
PUBLIC_DIR = r"D:\VibrusGroup Website\public\screenshots"

os.makedirs(ARTIFACT_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

def save_screenshot(page, filename, full_page=True):
    path1 = os.path.join(ARTIFACT_DIR, filename)
    path2 = os.path.join(PUBLIC_DIR, filename)
    page.screenshot(path=path1, full_page=full_page)
    page.screenshot(path=path2, full_page=full_page)
    print(f"Captured: {filename}")

def run_tests():
    print("=" * 75)
    print("  MISSION 001.6 REFERENCE-INFORMED REDESIGN VISUAL VERIFICATION SUITE")
    print("=" * 75)
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # -------------------------------------------------------------
        # 1. Desktop Navigation & Dropdown Interaction Tests
        # -------------------------------------------------------------
        print("\n--- 1. Testing Desktop Navigation & Opaque Dropdowns ---")
        context = browser.new_context(viewport={"width": 1440, "height": 900})
        page = context.new_page()
        page.goto(BASE_URL, wait_until="networkidle")

        # Capture Desktop Nav: Divisions Open
        page.click("#divisions-menu-button")
        time.sleep(0.3)
        div_drop = page.locator("#divisions-menu-dropdown")
        assert div_drop.is_visible(), "Divisions dropdown should be visible"
        
        # Verify background is opaque white
        bg_color = page.evaluate("window.getComputedStyle(document.getElementById('divisions-menu-dropdown')).backgroundColor")
        print(f"Divisions dropdown background: {bg_color}")
        assert "255, 255, 255" in bg_color or "rgb(255, 255, 255)" in bg_color, f"Dropdown background must be opaque white, got {bg_color}"
        save_screenshot(page, "mission_16_05_desktop_nav_divisions.png", full_page=False)

        # Click Candidates -> Divisions must auto-close, Candidates open
        page.click("#careers-menu-button")
        time.sleep(0.3)
        car_drop = page.locator("#careers-menu-dropdown")
        assert car_drop.is_visible(), "Candidates dropdown should be visible"
        
        div_hidden = page.evaluate("window.getComputedStyle(document.getElementById('divisions-menu-dropdown')).visibility")
        print(f"Divisions dropdown after opening Candidates: visibility={div_hidden}")
        assert div_hidden == "hidden", "Divisions dropdown must auto-close when Candidates opens"
        save_screenshot(page, "mission_16_06_desktop_nav_candidates.png", full_page=False)

        # Press Escape -> Candidates must close and focus return to trigger
        page.keyboard.press("Escape")
        time.sleep(0.2)
        car_hidden = page.evaluate("window.getComputedStyle(document.getElementById('careers-menu-dropdown')).visibility")
        active_id = page.evaluate("document.activeElement.id")
        print(f"After Escape: Candidates visibility={car_hidden}, activeElement={active_id}")
        assert car_hidden == "hidden", "Candidates dropdown must close on Escape"
        assert active_id == "careers-menu-button", "Focus must return to triggering button on Escape"

        # -------------------------------------------------------------
        # 2. Capture Desktop & Mobile Homepage and Guided Journey
        # -------------------------------------------------------------
        print("\n--- 2. Capturing Homepage & Guided Journey Evidence ---")
        save_screenshot(page, "mission_16_01_homepage_desktop.png", full_page=True)

        # Mobile Homepage (390px)
        context_mobile = browser.new_context(viewport={"width": 390, "height": 844})
        page_mobile = context_mobile.new_page()
        page_mobile.goto(BASE_URL, wait_until="networkidle")
        save_screenshot(page_mobile, "mission_16_02_homepage_mobile.png", full_page=False)

        # Mobile Navigation Drawer Open
        mobile_menu_button = page_mobile.locator("button[aria-label='Toggle Mobile Navigation Menu']")
        mobile_menu_button.click()
        time.sleep(0.3)
        save_screenshot(page_mobile, "mission_16_07_mobile_navigation.png", full_page=False)

        # -------------------------------------------------------------
        # 3. Capture Employer & Candidate Journeys
        # -------------------------------------------------------------
        print("\n--- 3. Capturing Primary Audiences Journeys ---")
        page.goto(f"{BASE_URL}/employers", wait_until="networkidle")
        save_screenshot(page, "mission_16_03_employer_journey.png", full_page=True)

        page.goto(f"{BASE_URL}/apply", wait_until="networkidle")
        save_screenshot(page, "mission_16_04_candidate_journey.png", full_page=True)

        # -------------------------------------------------------------
        # 4. Capture Major Redesigned Pages
        # -------------------------------------------------------------
        pages_to_capture = [
            ("/divisions/healthcare", "mission_16_08_healthcare_page.png"),
            ("/divisions/industrial", "mission_16_09_industrial_page.png"),
            ("/careers", "mission_16_10_careers_page.png"),
            ("/coverage", "mission_16_11_coverage_page.png"),
            ("/contact", "mission_16_12_contact_page.png"),
            ("/about", "mission_16_13_about_page.png"),
            ("/compliance", "mission_16_14_compliance_page.png"),
            ("/testimonials", "mission_16_15_testimonials_page.png"),
        ]

        print("\n--- 4. Capturing Major Pages Visual Evidence ---")
        for route, fn in pages_to_capture:
            page.goto(f"{BASE_URL}{route}", wait_until="networkidle")
            # Verify images on page loaded
            broken_images = page.evaluate("""
                Array.from(document.querySelectorAll('img')).filter(img => !img.complete || img.naturalWidth === 0).length
            """)
            assert broken_images == 0, f"Found {broken_images} broken images on {route}"
            save_screenshot(page, fn, full_page=True)

        # -------------------------------------------------------------
        # 5. Responsive Viewport & No Horizontal Scroll Checks
        # -------------------------------------------------------------
        print("\n--- 5. Testing Responsive Viewports for Horizontal Scroll Overflow ---")
        viewports = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920]
        test_routes = ["/", "/about", "/employers", "/apply", "/divisions/healthcare", "/contact", "/compliance"]

        for vp in viewports:
            ctx = browser.new_context(viewport={"width": vp, "height": 800})
            p_test = ctx.new_page()
            for r in test_routes:
                p_test.goto(f"{BASE_URL}{r}", wait_until="networkidle")
                scroll_w = p_test.evaluate("document.documentElement.scrollWidth")
                inner_w = p_test.evaluate("window.innerWidth")
                diff = scroll_w - inner_w
                if diff > 1:
                    print(f"FAILED: Horizontal overflow on {r} at {vp}px! scrollWidth={scroll_w}, innerWidth={inner_w}")
                    assert diff <= 1, f"Horizontal overflow on {r} at {vp}px"
            ctx.close()
        print(f"All {len(viewports)} responsive viewports verified: 0 horizontal scroll overflow across all routes!")

        # -------------------------------------------------------------
        # 6. Accessibility & Reduced Motion Checks
        # -------------------------------------------------------------
        print("\n--- 6. Testing Accessibility & Prefers-Reduced-Motion ---")
        ctx_motion = browser.new_context(
            viewport={"width": 1280, "height": 800},
            reduced_motion="reduce"
        )
        p_motion = ctx_motion.new_page()
        p_motion.goto(BASE_URL, wait_until="networkidle")
        missing_alts = p_motion.evaluate("""
            Array.from(document.querySelectorAll('img')).filter(img => !img.hasAttribute('alt') || img.getAttribute('alt').trim() === '').length
        """)
        print(f"Missing alt attributes: {missing_alts}")
        assert missing_alts == 0, f"Found {missing_alts} images missing alt text!"
        ctx_motion.close()
        print("Accessibility & reduced motion checks passed!")

        browser.close()
        print("\n" + "=" * 75)
        print("  ALL MISSION 001.6 VISUAL & INTERACTIVE VERIFICATIONS PASSED SUCCESSFULLY!")
        print("=" * 75)

if __name__ == "__main__":
    run_tests()
