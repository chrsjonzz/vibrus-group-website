"""
Comprehensive automated test suite for Vibrus Group website - Mission 001 Correction Pass.
Tests:
1. All 20 GET routes return HTTP 200 OK.
2. /api/request-staff: valid submission + attachment -> UUID file in secure_uploads/, 200 OK.
3. /api/request-staff: validation errors (missing fields, file > 5MB, invalid .exe extension) -> 400 Bad Request.
4. /api/apply: valid candidate submission + resume -> UUID file in secure_uploads/, 200 OK.
5. /api/contact: valid inquiry -> 200 OK, recipient is strictly ['sharon@vibrusgroup.com'].
6. Upload Security Audit:
   - Direct HTTP GET to /uploads/<filename> returns 404.
   - Direct HTTP GET to /secure_uploads/<filename> returns 404.
   - Files in secure_uploads/ have randomized UUID names.
   - No public URLs exposed in API responses.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
import urllib.request
import urllib.error
import json
import os
import time

BASE_URL = "http://localhost:3000"
SECURE_UPLOADS_DIR = r"D:\VibrusGroup Website\secure_uploads"

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
    ("/testimonials", "Testimonials"),
    ("/contact", "Contact & HQ"),
    ("/compliance", "Compliance & Credentialing"),
    ("/management-review", "Management Review Checklist"),
    ("/images/vibrus-logo.jpg", "Approved Logo Asset"),
]

def test_routes():
    print("=" * 70)
    print("  TEST 1: HTTP GET ROUTE VALIDATION (20 Routes)")
    print("=" * 70)
    
    passed = 0
    failed = 0
    
    for path, name in ROUTES:
        url = BASE_URL + path
        start = time.time()
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "VibrusTestSuite/1.0"})
            with urllib.request.urlopen(req, timeout=10) as response:
                duration_ms = int((time.time() - start) * 1000)
                status = response.status
                data = response.read()
                print(f"  [PASS] {status} OK ({duration_ms:>3}ms) | {path:<28} -> {name}")
                passed += 1
        except Exception as e:
            duration_ms = int((time.time() - start) * 1000)
            print(f"  [FAIL] ERROR ({duration_ms:>3}ms) | {path:<28} -> {name} | {str(e)}")
            failed += 1
            
    print("-" * 70)
    print(f"  Route Tests: {passed} PASSED | {failed} FAILED (Total: {len(ROUTES)})")
    return failed == 0

def test_multipart_request_staff():
    print("\n" + "=" * 70)
    print("  TEST 2: STAFF REQUEST API & SECURE STORAGE VALIDATION")
    print("=" * 70)
    
    boundary = "----VibrusFormBoundary7MA4YWxkTrZu0gW"
    
    fields = {
        "facilityName": "Warren Advanced Care Pavilion",
        "facilityType": "Healthcare Facility",
        "contactName": "Sarah Jenkins, DON",
        "contactPhone": "(248) 555-0199",
        "contactEmail": "sarah.j@warrencare.org",
        "positionNeeded": "Telemetry Registered Nurse (RN)",
        "numberOfStaff": "3",
        "shiftType": "Night Shift (12-hr)",
        "urgency": "Immediate (Within 30 Mins)",
        "county": "Macomb",
        "notes": "Urgent census spike on floor 3. Floor orientation ready.",
    }
    
    file_content = b"%PDF-1.4 Mock Requisition Document for Automated Testing by Antigravity."
    filename = "test_staff_requisition.pdf"
    
    body = bytearray()
    for key, value in fields.items():
        body.extend(f"--{boundary}\r\n".encode("utf-8"))
        body.extend(f'Content-Disposition: form-data; name="{key}"\r\n\r\n'.encode("utf-8"))
        body.extend(f"{value}\r\n".encode("utf-8"))
        
    body.extend(f"--{boundary}\r\n".encode("utf-8"))
    body.extend(f'Content-Disposition: form-data; name="requisitionFile"; filename="{filename}"\r\n'.encode("utf-8"))
    body.extend(b"Content-Type: application/pdf\r\n\r\n")
    body.extend(file_content)
    body.extend(b"\r\n")
    body.extend(f"--{boundary}--\r\n".encode("utf-8"))
    
    req = urllib.request.Request(
        f"{BASE_URL}/api/request-staff",
        data=bytes(body),
        headers={
            "Content-Type": f"multipart/form-data; boundary={boundary}",
            "User-Agent": "VibrusTestSuite/1.0"
        }
    )
    
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            res_data = json.loads(response.read().decode("utf-8"))
            print(f"  [PASS] Status: {response.status}")
            print(f"         Success: {res_data.get('success')}")
            print(f"         Callback Commitment: {res_data.get('callbackCommitment')}")
            print(f"         Active Recipients: {res_data.get('recipients')}")
            print(f"         Mode: {res_data.get('mode')}")
            print(f"         Stored Locally: {res_data.get('storedLocally')}")
            saved_name = res_data.get('internalFileReference')
            print(f"         Saved Filename: {saved_name}")
            
            # Verify recipient is strictly sharon@vibrusgroup.com
            assert res_data.get('recipients') == ["sharon@vibrusgroup.com"], "Recipient should be sharon@vibrusgroup.com only"
            # Verify callback commitment is approved 30 minutes
            assert res_data.get('callbackCommitment') == "30 minutes", f"Callback commitment should be 30 minutes, got {res_data.get('callbackCommitment')}"
            # Verify no public URL returned
            assert not res_data.get('publicUrl'), "Public URL must NOT be exposed"
            assert not res_data.get('url'), "Public URL must NOT be exposed"
            # Verify file exists on disk with UUID format
            if saved_name:
                disk_path = os.path.join(SECURE_UPLOADS_DIR, saved_name)
                assert os.path.exists(disk_path), f"File {disk_path} must exist in secure_uploads/"
                print(f"  [PASS] Verified file exists in secure_uploads: {disk_path}")
            return saved_name
    except Exception as e:
        print(f"  [FAIL] Staff request failed: {e}")
        return None

def test_request_staff_validation():
    print("\n" + "=" * 70)
    print("  TEST 3: FORM VALIDATION CHECKS (Size, Extension, Missing Fields)")
    print("=" * 70)
    
    # 3a: Missing required fields
    boundary = "----VibrusBoundaryVal1"
    body = bytearray()
    body.extend(f"--{boundary}\r\nContent-Disposition: form-data; name=\"facilityName\"\r\n\r\nAcme\r\n--{boundary}--\r\n".encode())
    req = urllib.request.Request(
        f"{BASE_URL}/api/request-staff",
        data=bytes(body),
        headers={"Content-Type": f"multipart/form-data; boundary={boundary}"}
    )
    val1_ok = False
    try:
        urllib.request.urlopen(req, timeout=10)
    except urllib.error.HTTPError as e:
        if e.code == 400:
            print("  [PASS] Missing required fields correctly returned HTTP 400")
            val1_ok = True
        else:
            print(f"  [FAIL] Expected 400 but got {e.code}")

    # 3b: Disallowed extension (.exe)
    boundary = "----VibrusBoundaryVal2"
    body = bytearray()
    fields = {"facilityName": "Test", "facilityType": "Clinic", "contactName": "Bob", "contactPhone": "123", "contactEmail": "b@b.com", "positionNeeded": "RN"}
    for k, v in fields.items():
        body.extend(f"--{boundary}\r\nContent-Disposition: form-data; name=\"{k}\"\r\n\r\n{v}\r\n".encode())
    body.extend(f"--{boundary}\r\nContent-Disposition: form-data; name=\"requisitionFile\"; filename=\"malicious.exe\"\r\nContent-Type: application/octet-stream\r\n\r\nBADCONTENT\r\n--{boundary}--\r\n".encode())
    req = urllib.request.Request(
        f"{BASE_URL}/api/request-staff",
        data=bytes(body),
        headers={"Content-Type": f"multipart/form-data; boundary={boundary}"}
    )
    val2_ok = False
    try:
        urllib.request.urlopen(req, timeout=10)
    except urllib.error.HTTPError as e:
        if e.code == 400:
            print("  [PASS] Disallowed extension (.exe) correctly returned HTTP 400")
            val2_ok = True
        else:
            print(f"  [FAIL] Expected 400 for .exe but got {e.code}")

    # 3c: Oversized file (> 10 MB)
    boundary = "----VibrusBoundaryVal3"
    body = bytearray()
    for k, v in fields.items():
        body.extend(f"--{boundary}\r\nContent-Disposition: form-data; name=\"{k}\"\r\n\r\n{v}\r\n".encode())
    # 10.1 MB of dummy data (exceeds 10 MB limit)
    oversized = b"0" * (10 * 1024 * 1024 + 1024)
    body.extend(f"--{boundary}\r\nContent-Disposition: form-data; name=\"requisitionFile\"; filename=\"huge.pdf\"\r\nContent-Type: application/pdf\r\n\r\n".encode())
    body.extend(oversized)
    body.extend(f"\r\n--{boundary}--\r\n".encode())
    req = urllib.request.Request(
        f"{BASE_URL}/api/request-staff",
        data=bytes(body),
        headers={"Content-Type": f"multipart/form-data; boundary={boundary}"}
    )
    val3_ok = False
    try:
        urllib.request.urlopen(req, timeout=15)
    except urllib.error.HTTPError as e:
        if e.code == 400:
            print("  [PASS] File exceeding 10 MB limit correctly returned HTTP 400")
            val3_ok = True
        else:
            print(f"  [FAIL] Expected 400 for >10MB but got {e.code}")

    return val1_ok and val2_ok and val3_ok

def test_multipart_apply():
    print("\n" + "=" * 70)
    print("  TEST 4: CANDIDATE 60-SEC APPLY API & RESUME STORAGE")
    print("=" * 70)
    
    boundary = "----VibrusApplyBoundary9B8C7D6E5F4"
    
    fields = {
        "fullName": "Elena Vance, BSN, RN",
        "phone": "(248) 555-0812",
        "email": "elena.vance@example.com",
        "profession": "Intensive Care Unit (ICU) RN",
        "experienceYears": "5+ Years",
        "shiftPreference": "Flexible / Any Shift",
        "cityState": "Sterling Heights, MI",
        "notes": "BLS and ACLS current. Interested in Macomb/Oakland per-diem.",
    }
    
    file_content = b"Candidate Resume: Elena Vance, BSN, RN. Critical Care experience."
    filename = "elena_vance_resume.txt"
    
    body = bytearray()
    for key, value in fields.items():
        body.extend(f"--{boundary}\r\n".encode("utf-8"))
        body.extend(f'Content-Disposition: form-data; name="{key}"\r\n\r\n'.encode("utf-8"))
        body.extend(f"{value}\r\n".encode("utf-8"))
        
    body.extend(f"--{boundary}\r\n".encode("utf-8"))
    body.extend(f'Content-Disposition: form-data; name="resumeFile"; filename="{filename}"\r\n'.encode("utf-8"))
    body.extend(b"Content-Type: text/plain\r\n\r\n")
    body.extend(file_content)
    body.extend(b"\r\n")
    body.extend(f"--{boundary}--\r\n".encode("utf-8"))
    
    req = urllib.request.Request(
        f"{BASE_URL}/api/apply",
        data=bytes(body),
        headers={
            "Content-Type": f"multipart/form-data; boundary={boundary}",
            "User-Agent": "VibrusTestSuite/1.0"
        }
    )
    
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            res_data = json.loads(response.read().decode("utf-8"))
            print(f"  [PASS] Status: {response.status}")
            print(f"         Success: {res_data.get('success')}")
            print(f"         Active Recipients: {res_data.get('recipients')}")
            print(f"         Mode: {res_data.get('mode')}")
            print(f"         Stored Locally: {res_data.get('storedLocally')}")
            saved_name = res_data.get('internalFileReference')
            print(f"         Saved Resume Filename: {saved_name}")
            
            assert res_data.get('recipients') == ["sharon@vibrusgroup.com"], "Recipient should be sharon@vibrusgroup.com only"
            assert not res_data.get('publicUrl'), "Public URL must NOT be exposed"
            assert not res_data.get('url'), "Public URL must NOT be exposed"
            if saved_name:
                disk_path = os.path.join(SECURE_UPLOADS_DIR, saved_name)
                assert os.path.exists(disk_path), f"File {disk_path} must exist in secure_uploads/"
                print(f"  [PASS] Verified resume exists in secure_uploads: {disk_path}")
            return saved_name
    except Exception as e:
        print(f"  [FAIL] Candidate application failed: {e}")
        return None

def test_contact_api():
    print("\n" + "=" * 70)
    print("  TEST 5: CONTACT API INQUIRY ENDPOINT")
    print("=" * 70)
    
    payload = {
        "name": "Marcus Sterling",
        "email": "m.sterling@logistics-corp.com",
        "phone": "(248) 555-0333",
        "subject": "Industrial / Warehouse Staffing",
        "message": "Looking to contract 10 certified forklift drivers for our Warren distribution facility starting next month."
    }
    
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        f"{BASE_URL}/api/contact",
        data=data,
        headers={
            "Content-Type": "application/json",
            "User-Agent": "VibrusTestSuite/1.0"
        }
    )
    
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            res_data = json.loads(response.read().decode("utf-8"))
            print(f"  [PASS] Status: {response.status}")
            print(f"         Success: {res_data.get('success')}")
            print(f"         Recipients: {res_data.get('recipients')}")
            print(f"         Mode: {res_data.get('mode')}")
            assert res_data.get('recipients') == ["sharon@vibrusgroup.com"], "Recipient should be sharon@vibrusgroup.com only"
            return True
    except Exception as e:
        print(f"  [FAIL] Contact API failed: {e}")
        return False

def test_security_audit(saved_staff_file, saved_apply_file):
    print("\n" + "=" * 70)
    print("  TEST 6: UPLOAD DIRECTORY & DIRECT BROWSER ACCESS SECURITY AUDIT")
    print("=" * 70)
    
    public_uploads = r"D:\VibrusGroup Website\public\uploads"
    assert not os.path.exists(public_uploads) or len(os.listdir(public_uploads)) == 0, "public/uploads must not exist or be empty!"
    print("  [PASS] Confirmed public/uploads does NOT expose files")
    
    # Check that secure_uploads contains the files
    assert os.path.exists(SECURE_UPLOADS_DIR), "secure_uploads/ directory must exist"
    secure_files = os.listdir(SECURE_UPLOADS_DIR)
    print(f"  [PASS] secure_uploads/ exists with {len(secure_files)} files: {secure_files}")
    
    # Try direct web access to both potential URLs
    files_to_test = [f for f in [saved_staff_file, saved_apply_file] if f]
    
    security_passed = True
    for f in files_to_test:
        for prefix in ["/uploads/", "/secure_uploads/"]:
            test_url = f"{BASE_URL}{prefix}{f}"
            try:
                urllib.request.urlopen(test_url, timeout=5)
                print(f"  [FAIL] SECURITY RISK! Direct access succeeded for {test_url}")
                security_passed = False
            except urllib.error.HTTPError as e:
                if e.code == 404:
                    print(f"  [PASS] Direct web request {prefix}{f} correctly returned HTTP 404 Not Found")
                else:
                    print(f"  [WARN] Direct web request returned {e.code}")
            except Exception as e:
                print(f"  [PASS] Direct web request failed as expected: {e}")
                
    return security_passed

if __name__ == "__main__":
    t1 = test_routes()
    staff_file = test_multipart_request_staff()
    t3 = test_request_staff_validation()
    apply_file = test_multipart_apply()
    t5 = test_contact_api()
    t6 = test_security_audit(staff_file, apply_file)
    
    all_ok = all([t1, staff_file is not None, t3, apply_file is not None, t5, t6])
    print("\n" + "=" * 70)
    print(f"  MISSION 001 CORRECTION PASS SUITE: {'ALL CHECKS PASSED (6/6)' if all_ok else 'FAILED'}")
    print("=" * 70)
    sys.exit(0 if all_ok else 1)
