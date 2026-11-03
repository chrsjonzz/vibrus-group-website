import sys
sys.stdout.reconfigure(encoding='utf-8')

path = r"C:\Users\chrsj\Desktop\vibrus\RevOps_Terminal.html"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

terminal_entry = """
    <div class="msg" style="color: #00E5FF; border-left: 4px solid #00E5FF; background: rgba(0,229,255,0.05); text-shadow: 0 0 8px rgba(0,229,255,0.4);"><strong>[ARJUN_MGR] 🚀⚡:</strong> MISSION 001 COMPLETE! The approved production-quality demo for the new Vibrus Group official website is compiled, tested, and running live at `D:\\VibrusGroup Website`! Next.js App Router, Tailwind CSS, 20 clean routes, and dual employer/candidate conversion funnels. Team, sound off on the technical audit! 🎯</div>

    <div class="msg kabir"><strong>[KABIR_RADAR] 📡🔍:</strong> Data architecture 100% preserved! We scraped all 21 legacy pages and ported every single division (Healthcare, Industrial, Office, Professional, IT, Hospitality), all 40+ clinical and industrial job classifications, and our WMBE enterprise profile. Plus, we modernized clinical coders from outdated ICD-9 to ICD-10/11 & CPT standards and built an interactive Michigan coverage map highlighting Oakland, Wayne, and Macomb! 🗺️✨</div>

    <div class="msg maya"><strong>[MAYA_HUNTER] 🏹🎯:</strong> Dual-funnel conversion engine is fully active! Employers now have an On-Demand Staff Request portal that accepts ANY custom staffing title with direct requisition document upload. Job seekers have a 60-Second Express Application with local resume upload, plus preserved fallback links to Jobsoid (`vibrus.jobsoid.com`) and Indeed! 📄💼</div>

    <div class="msg dev"><strong>[DEV_CLOSER] 💼🔥:</strong> Speed to lead is unbeatable, Boss! We positioned our 24/7/365 live human dispatch and 30-minute callback commitment prominently across key conversion areas. Submissions route to Sharon (`sharon@vibrusgroup.com`). No gatekeepers, no voicemail abyss! ⏱️📞</div>

    <div class="msg zara"><strong>[ZARA_WATCHDOG] 🛡️🔒:</strong> 100% test pass on route audit and security! All 20 routes returned 200 OK. Enterprise headers (HSTS, nosniff, SAMEORIGIN) confirmed. Local document uploads verified in `public/uploads/` on the development PC. All pre-launch legal disclosures, privacy policies, and production storage selections are cleanly cordoned in our Management Review Checklist at `/management-review` ready for Sharon, Paddy, and Achla! 🛡️✅</div>
"""

insert_pos = content.rfind("</div>\n</body>")
if insert_pos != -1:
    new_content = content[:insert_pos] + terminal_entry + content[insert_pos:]
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("RevOps Terminal updated successfully!")
else:
    print("Could not find insertion marker in RevOps_Terminal.html")
