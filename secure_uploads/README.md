# SECURE LOCAL DEMO STORAGE
> **Location:** `D:\VibrusGroup Website\secure_uploads\`  
> **Access Model:** Internal Local Filesystem Only (NOT served by web server)

## Security Architecture for Demo:
1. Files uploaded via the website forms are stored exclusively in this non-public folder.
2. File paths and filenames are randomized (`crypto.randomUUID()`) to eliminate predictable paths.
3. No direct browser access or public URL is generated or exposed.
4. File size is strictly capped at 5 MB.
5. Permitted file types are restricted to: `.pdf`, `.docx`, `.doc`, `.txt`.

## Production Cloud Migration Requirement:
- Local filesystem storage is strictly for testing and validation on this local development PC.
- For production deployment to Vercel, management (Sharon, Paddy, and Achla) must review and approve a cloud object storage architecture (e.g., Vercel Blob with private access or AWS S3 with SSE-KMS encryption and pre-signed URLs).
- Retention policies and automatic file expiration must be formalized before live launch.
