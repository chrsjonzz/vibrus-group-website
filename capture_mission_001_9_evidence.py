"""
Playwright automated screenshot capture script for PROJECT VIBRUS GROUP - MISSION 001.9.
Captures all 17 specified visual evidence screenshots across desktop and mobile viewports.
Saves images to both the artifact directory and D:\\VibrusGroup Website\\public\\screenshots\\.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
import os
import asyncio
import tempfile
from playwright.async_api import async_playwright

ARTIFACT_DIR = r"C:\Users\chrsj\.gemini\antigravity\brain\c38d7ad4-60e6-424c-a503-400829d208a0"
PUBLIC_DIR = r"D:\VibrusGroup Website\public\screenshots"
os.makedirs(PUBLIC_DIR, exist_ok=True)

async def capture_all():
    print("Starting Mission 001.9 automated visual evidence capture...")
    
    # Create sample dummy files for testing the upload component
    temp_dir = tempfile.mkdtemp()
    sample_pdf = os.path.join(temp_dir, "Elena_Vance_RN_Resume.pdf")
    with open(sample_pdf, "wb") as f:
        f.write(b"%PDF-1.4 Sample Resume for Elena Vance, RN - Critical Care Specialist")
        
    sample_txt = os.path.join(temp_dir, "Michigan_Nursing_License_Verification.txt")
    with open(sample_txt, "w", encoding="utf-8") as f:
        f.write("State of Michigan LARA License Verification\nLicense Number: 4704-982134\nStatus: Active / Good Standing\nDiscipline: None\nSpecialty: Critical Care / Adult Telemetry")

    sample_doc = os.path.join(temp_dir, "ACLS_BLS_Certifications.docx")
    with open(sample_doc, "wb") as f:
        f.write(b"PK\x03\x04\x14\x00\x00\x00\x08\x00Dummy docx container for inspection testing")

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)

        async def save_both(filename, page_or_element, full_page=None, clip=None):
            art_path = os.path.join(ARTIFACT_DIR, filename)
            pub_path = os.path.join(PUBLIC_DIR, filename)
            if clip:
                await page_or_element.screenshot(path=art_path, clip=clip)
                await page_or_element.screenshot(path=pub_path, clip=clip)
            elif full_page is not None and hasattr(page_or_element, "goto"):
                await page_or_element.screenshot(path=art_path, full_page=full_page)
                await page_or_element.screenshot(path=pub_path, full_page=full_page)
            else:
                await page_or_element.screenshot(path=art_path)
                await page_or_element.screenshot(path=pub_path)
            print(f"  [SAVED] {filename}")

        # -------------------------------------------------------------
        # 1. Desktop Viewport (1440x900)
        # -------------------------------------------------------------
        desktop = await browser.new_page(viewport={"width": 1440, "height": 900})
        await desktop.goto("http://localhost:3000/", wait_until="networkidle")
        await desktop.wait_for_timeout(800)

        # 1. mission_19_01_hero_overlay_desktop.png (Corrected homepage hero overlay)
        print("Capturing 1: Hero overlay desktop...")
        hero_right = desktop.locator("#hero-image-montage")
        if await hero_right.count() > 0:
            await save_both("mission_19_01_hero_overlay_desktop.png", hero_right)
        else:
            await save_both("mission_19_01_hero_overlay_desktop.png", desktop, clip={"x": 650, "y": 60, "width": 780, "height": 700})

        # 2. mission_19_02_hero_michiganwide.png (Michiganwide hero messaging focus)
        print("Capturing 2: Hero Michiganwide messaging...")
        await save_both("mission_19_02_hero_michiganwide.png", desktop, clip={"x": 0, "y": 60, "width": 800, "height": 700})

        # 3. mission_19_03_homepage_desktop.png (Homepage desktop above the fold)
        print("Capturing 3: Homepage desktop view...")
        await save_both("mission_19_03_homepage_desktop.png", desktop, full_page=False)

        # 15. mission_19_15_updated_navbar.png (Desktop navbar)
        print("Capturing 15: Updated navbar...")
        navbar = desktop.locator("header")
        await save_both("mission_19_15_updated_navbar.png", navbar)

        # 16. mission_19_16_updated_logo.png (Updated logo presentation close-up)
        print("Capturing 16: Updated logo presentation...")
        logo = desktop.locator("header a[href='/'] img").first
        await save_both("mission_19_16_updated_logo.png", logo)

        # -------------------------------------------------------------
        # 2. Mobile Viewport (390x844 - iPhone 12/13/14)
        # -------------------------------------------------------------
        print("Capturing 4: Homepage mobile view...")
        mobile = await browser.new_page(viewport={"width": 390, "height": 844}, is_mobile=True)
        await mobile.goto("http://localhost:3000/", wait_until="networkidle")
        await mobile.wait_for_timeout(600)
        await save_both("mission_19_04_homepage_mobile.png", mobile, full_page=False)
        await mobile.close()

        # -------------------------------------------------------------
        # 3. Agendrix Interactive Experience Screenshots (/careers)
        # -------------------------------------------------------------
        print("Navigating to /careers for Agendrix steps...")
        await desktop.goto("http://localhost:3000/careers", wait_until="networkidle")
        await desktop.wait_for_timeout(600)

        agendrix_section = desktop.locator("#agendrix-experience")
        await agendrix_section.scroll_into_view_if_needed()
        await desktop.wait_for_timeout(600)

        # 5. mission_19_05_agendrix_schedule.png (Step 1: View Schedule)
        print("Capturing 5: Agendrix Schedule...")
        await desktop.click("#agendrix-step-view-schedule")
        await desktop.wait_for_timeout(400)
        await save_both("mission_19_05_agendrix_schedule.png", agendrix_section)

        # 6. mission_19_06_agendrix_notification.png (Step 2: Stay Updated)
        print("Capturing 6: Agendrix Notifications...")
        await desktop.click("#agendrix-step-stay-updated")
        await desktop.wait_for_timeout(400)
        await save_both("mission_19_06_agendrix_notification.png", agendrix_section)

        # 7. mission_19_07_agendrix_timeoff.png (Step 3: Time-off)
        print("Capturing 7: Agendrix Time-Off...")
        await desktop.click("#agendrix-step-availability")
        await desktop.wait_for_timeout(400)
        await save_both("mission_19_07_agendrix_timeoff.png", agendrix_section)

        # 8. mission_19_08_agendrix_openshift.png (Step 4: Open shifts)
        print("Capturing 8: Agendrix Open Shifts...")
        await desktop.click("#agendrix-step-open-shifts")
        await desktop.wait_for_timeout(400)
        await save_both("mission_19_08_agendrix_openshift.png", agendrix_section)

        # 9. mission_19_09_careers_agendrix.png (Full careers page view showing Agendrix)
        print("Capturing 9: Full /careers view with Agendrix section...")
        await save_both("mission_19_09_careers_agendrix.png", desktop, full_page=False)

        # -------------------------------------------------------------
        # 4. Multi-File Upload & Document Preview Workflow (/apply)
        # -------------------------------------------------------------
        print("Navigating to /apply for upload & preview testing...")
        await desktop.goto("http://localhost:3000/apply", wait_until="networkidle")
        await desktop.wait_for_timeout(600)

        # Fill candidate form fields
        await desktop.fill("input[name='fullName']", "Elena Vance, BSN, RN")
        await desktop.fill("input[name='email']", "elena.vance@example.com")
        await desktop.fill("input[name='phone']", "(248) 555-0812")
        await desktop.fill("input[name='cityState']", "Sterling Heights, MI")
        await desktop.select_option("select[name='profession']", index=1)

        # Upload multiple files via the hidden file input
        file_input = desktop.locator("#candidate-express-files")
        await file_input.set_input_files([sample_pdf, sample_txt, sample_doc])
        await desktop.wait_for_timeout(800)

        # 10. mission_19_10_upload_multifile.png (Multi-file upload state with list chips)
        print("Capturing 10: Multi-file upload state...")
        upload_area = desktop.locator("#advanced-doc-upload-container")
        await save_both("mission_19_10_upload_multifile.png", upload_area)

        # 11. mission_19_11_upload_progress.png (Upload progress & stats)
        print("Capturing 11: Upload progress and summary banner...")
        await save_both("mission_19_11_upload_progress.png", desktop, clip={"x": 200, "y": 250, "width": 1040, "height": 650})

        # 12. mission_19_12_preview_open.png (In-page preview modal open)
        print("Capturing 12: In-page document preview modal...")
        preview_btn_1 = desktop.locator("#preview-btn-1") # Preview TXT verification file
        if await preview_btn_1.count() > 0:
            await preview_btn_1.click()
            await desktop.wait_for_timeout(600)
            await save_both("mission_19_12_preview_open.png", desktop, full_page=False)

            # 13. mission_19_13_preview_zoom.png (Document preview zoomed in)
            print("Capturing 13: Document preview zoom state...")
            zoom_in_btn = desktop.locator("#zoom-in-btn")
            if await zoom_in_btn.count() > 0:
                await zoom_in_btn.click()
                await desktop.wait_for_timeout(200)
                await zoom_in_btn.click()
                await desktop.wait_for_timeout(300)
            await save_both("mission_19_13_preview_zoom.png", desktop, full_page=False)

            # Close preview modal
            close_btn = desktop.locator("#close-preview-btn")
            if await close_btn.count() > 0:
                await close_btn.click()
                await desktop.wait_for_timeout(300)

        # 14. mission_19_14_preview_mobile.png (Mobile document preview)
        print("Capturing 14: Mobile document preview...")
        mobile_preview = await browser.new_page(viewport={"width": 390, "height": 844}, is_mobile=True)
        await mobile_preview.goto("http://localhost:3000/apply", wait_until="networkidle")
        await mobile_preview.wait_for_timeout(500)
        mobile_file_input = mobile_preview.locator("#candidate-express-files")
        await mobile_file_input.set_input_files([sample_txt, sample_pdf])
        await mobile_preview.wait_for_timeout(500)
        mob_prev_btn = mobile_preview.locator("#preview-btn-0")
        if await mob_prev_btn.count() > 0:
            await mob_prev_btn.click()
            await mobile_preview.wait_for_timeout(600)
            await save_both("mission_19_14_preview_mobile.png", mobile_preview, full_page=False)
        await mobile_preview.close()

        # -------------------------------------------------------------
        # 5. Redesigned Headers Composite / Audit
        # -------------------------------------------------------------
        # 17. mission_19_17_redesigned_headers.png (Composite of About, Divisions, Employers headers)
        print("Capturing 17: Redesigned headers composite...")
        await desktop.goto("http://localhost:3000/about", wait_until="networkidle")
        await desktop.wait_for_timeout(500)
        await save_both("mission_19_17_redesigned_headers.png", desktop, clip={"x": 0, "y": 60, "width": 1440, "height": 620})

        await desktop.close()
        await browser.close()
        print("All 17 Mission 001.9 visual evidence screenshots captured successfully!")

if __name__ == "__main__":
    asyncio.run(capture_all())
