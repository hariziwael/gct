# Email Notification Setup - Candidatures

## Overview
When an admin accepts or refuses a candidature, an automatic email is sent to the candidate's email address that was provided when they filled out the application form.

## How It Works

### 1. Candidate Submits Application
- Candidate fills out the form in `/services/appels`
- Enters: Name, Email, Phone, and uploads CV
- Email is stored in Sanity database

### 2. Admin Accepts/Refuses
- Admin goes to `/admin/candidature`
- Clicks "Accepter" or "Refuser" button
- System automatically:
  1. Updates candidature status in database
  2. Sends email notification to candidate's email
  3. Shows success message to admin

### 3. Candidate Receives Email
- Email is sent to the email address they provided
- Contains:
  - Acceptance or rejection notification
  - Appel d'offres title
  - Optional admin note (if provided)
  - Professional GCT branding

## Environment Variables Required

Add these to your `.env.local` file:

```env
# Resend API Key (get from https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxx

# Email sender (must be verified in Resend)
# Format: "Name <email@domain.com>"
RESEND_EMAIL_FROM=GCT <noreply@yourdomain.com>
```

## Setup Instructions

### Step 1: Get Resend API Key
1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the key (starts with `re_`)

### Step 2: Verify Your Domain (Optional but Recommended)
1. In Resend dashboard, go to Domains
2. Add your domain (e.g., `gct.tn`)
3. Add the DNS records provided by Resend
4. Wait for verification (usually a few minutes)

### Step 3: Set Up Email Address
- If domain verified: Use `GCT <noreply@yourdomain.com>`
- If not verified: Use Resend's test domain: `onboarding@resend.dev`

### Step 4: Add Environment Variables
```env
RESEND_API_KEY=re_your_api_key_here
RESEND_EMAIL_FROM=GCT <noreply@yourdomain.com>
```

### Step 5: Test
1. Submit a test candidature
2. Accept or refuse it in admin panel
3. Check the candidate's email inbox
4. Check server logs for any errors

## Email Templates

### Acceptance Email
- Subject: `✅ Candidature acceptée - [Appel d'offres Title]`
- Content: Congratulations message, next steps info

### Rejection Email
- Subject: `❌ Candidature refusée - [Appel d'offres Title]`
- Content: Thank you message, encouragement to apply again

## Files Involved

1. **`lib/email.ts`** - Email sending utility function
2. **`app/api/candidature/route.ts`** - API endpoint that sends email
3. **`app/admin/candidature/page.tsx`** - Admin interface
4. **`app/services/appels/page.tsx`** - Candidate application form

## Troubleshooting

### Email Not Sending?
1. Check `RESEND_API_KEY` is set correctly
2. Check `RESEND_EMAIL_FROM` format is correct
3. Check Resend dashboard for errors
4. Check server logs for error messages
5. Verify domain is verified in Resend (if using custom domain)

### Email Going to Spam?
1. Verify your domain in Resend
2. Add SPF and DKIM records
3. Use a professional email address
4. Avoid spam trigger words

### Error Messages
- `Invalid API key`: Check RESEND_API_KEY
- `Invalid from address`: Check RESEND_EMAIL_FROM format
- `Domain not verified`: Verify domain in Resend dashboard

## Testing

### Test Email Sending
1. Create a test candidature with your email
2. Accept/refuse it in admin panel
3. Check your email inbox
4. Verify email content is correct

### Test in Development
- Resend allows 100 emails/day on free tier
- Use test domain for development: `onboarding@resend.dev`
- Production should use verified domain

## Security Notes

- Email is sent automatically when status changes
- Email errors don't block the status update
- Email address is validated before sending
- Admin can't see email content before sending
- Email is sent asynchronously (non-blocking)

## Future Enhancements

- Add email templates customization
- Add email scheduling
- Add email tracking (opened, clicked)
- Add admin note field in UI
- Add email preview before sending
- Add email history/logs

