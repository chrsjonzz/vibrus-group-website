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
    print("=" * 80)
    print("  MISSION 001.7 LIGHTER BRAND PALETTE & 'HOW VIBRUS WORKS' VISUAL VERIFICATION")
    print("=" * 80)
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # -------------------------------------------------------------
        # 1. Desktop Homepage & Brightened Hero
        # -------------------------------------------------------------
        print("\n--- 1. Testing Desktop Homepage & Brightened Hero ---")
        context = browser.new_context(viewport={"width": 1440, "height": 900})
        page = context.new_page()
        page.goto(BASE_URL, wait_until="networkidle")

        # Capture 01: Desktop Full Homepage
        save_screenshot(page, "mission_17_01_homepage_desktop.png", full_page=True)

        # Capture 03: Brightened Hero Viewport
        save_screenshot(page, "mission_17_03_brightened_hero.png", full_page=False)

        # -------------------------------------------------------------
        # 2. Interactive "How Vibrus Works For You" Journey
        # -------------------------------------------------------------
        print("\n--- 2. Testing 'How Vibrus Works For You' Interactive Milestones ---")
        
        # Scroll to "How Vibrus Works For You"
        how_section = page.locator("text=How Vibrus Works For You").first
        how_section.scroll_into_view_if_needed()
        time.sleep(0.5)

        # Capture 04: How It Works - Facilities Mode
        save_screenshot(page, "mission_17_04_how_it_works_facilities.png", full_page=False)

        # Switch to Candidates
        page.click("button:has-text('For Candidates & Clinicians')")
        time.sleep(0.5)

        # Verify candidate content is visible
        assert page.locator("text=Start Your 60-Second Application").first.is_visible(), "Candidate step 1 should be visible"
        
        # Capture 05: How It Works - Candidates Mode
        save_screenshot(page, "mission_17_05_how_it_works_candidates.png", full_page=False)

        # Click Candidate Step 2 to verify interactive step switching
        page.click("text=Share Your Experience & Preferred Schedule")
        time.sleep(0.4)
        active_subtitle = page.locator("text=Tailored Shifts Matching Your Life").first
        assert active_subtitle.is_visible(), "Step 2 details should be active"
        print("Candidate Step 2 interactivity verified successfully.")

        # Switch back to Facilities
        page.click("button:has-text('For Facilities & Employers')")
        time.sleep(0.4)
        assert page.locator("text=Tell Us What Support You Need").first.is_visible(), "Facility step 1 should be visible"
        print("Facility audience toggle verified successfully.")

        # -------------------------------------------------------------
        # 3. Mobile Experience
        # -------------------------------------------------------------
        print("\n--- 3. Testing Mobile Homepage ---")
        mobile_ctx = browser.new_context(viewport={"width": 375, "height": 812})
        m_page = mobile_ctx.new_page()
        m_page.goto(BASE_URL, wait_until="networkidle")

        # Capture 02: Mobile Homepage
        save_screenshot(m_page, "mission_17_02_homepage_mobile.png", full_page=True)

        # -------------------------------------------------------------
        # 4. Key Page Full-Screen Captures
        # -------------------------------------------------------------
        print("\n--- 4. Capturing Key Rebalanced Pages ---")
        
        pages_to_capture = [
            ("/divisions/healthcare", "mission_17_06_healthcare_page.png"),
            ("/employers", "mission_17_07_employers_page.png"),
            ("/apply", "mission_17_08_apply_page.png"),
            ("/careers", "mission_17_09_careers_page.png"),
            ("/coverage", "mission_17_10_coverage_page.png"),
        ]

        for route, fname in pages_to_capture:
            page.goto(f"{BASE_URL}{route}", wait_until="networkidle")
            time.sleep(0.3)
            save_screenshot(page, fname, full_page=True)

        # -------------------------------------------------------------
        # 5. Nine Viewports Responsive Overflow Check
        # -------------------------------------------------------------
        print("\n--- 5. Responsive Overflow Check (9 Viewports) ---")
        viewports = [320, 375, 414, 640, 768, 1024, 1280, 1536, 1920]
        test_routes = ["/", "/employers", "/apply", "/careers", "/divisions/healthcare"]

        for width in viewports:
            v_ctx = browser.new_context(viewport={"width": width, "height": 800})
            v_page = v_ctx.new_page()
            
            for r in test_routes:
                v_page.goto(f"{BASE_URL}{r}", wait_until="networkidle")
                overflow = v_page.evaluate("""
                    () => {
                        const scrollW = document.documentElement.scrollWidth;
                        const innerW = window.innerWidth;
                        return { scrollW, innerW, hasOverflow: scrollW > innerW };
                    }
                """)
                assert not overflow["hasOverflow"], (
                    f"Horizontal overflow detected at {width}px on route {r}: "
                    f"scrollWidth={overflow['scrollW']} > innerWidth={overflow['innerW']}"
                )
            v_ctx.close()
            print(f"Viewport {width}px: PASS (0 horizontal overflow on 5 key routes)")

        # -------------------------------------------------------------
        # 6. Image Integrity Check
        # -------------------------------------------------------------
        print("\n--- 6. Image Integrity Verification ---")
        page.goto(BASE_URL, wait_until="networkidle")
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(1.2)
        page.evaluate("window.scrollTo(0, 0)")
        time.sleep(0.5)

        broken_imgs = page.evaluate("""
            () => {
                const images = Array.from(document.querySelectorAll('img'));
                return images
                    .filter(img => !img.complete || img.naturalWidth === 0)
                    .map(img => img.src);
            }
        """)
        print(f"Broken images found on homepage: {len(broken_imgs)}")
        if broken_imgs:
            print(f"Broken image URLs: {broken_imgs}")
        assert len(broken_imgs) == 0, f"Found {len(broken_imgs)} broken images on homepage"

        browser.close()
        print("\n" + "=" * 80)
        print("  ALL MISSION 001.7 PLAYWRIGHT VISUAL VERIFICATION TESTS PASSED SUCCESSFULLY!")
        print("=" * 80)

if __name__ == "__main__":
    run_tests()
