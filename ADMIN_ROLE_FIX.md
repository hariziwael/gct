# Fix Admin Role Access Issue

## Problem
Users with admin role are being denied access to `/admin` routes.

## Solution
The middleware now fetches the user from Clerk API to check their role. However, you need to ensure the user's `publicMetadata` has `role: 'admin'` set correctly.

## How to Fix

### Option 1: Check Your Current Role (Recommended)
1. Open your browser and navigate to: `http://localhost:3000/api/admin/check-role`
2. This will show you:
   - If you're authenticated
   - Your current role
   - Your publicMetadata
   - What needs to be fixed

### Option 2: Set Role via Clerk Dashboard
1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Navigate to Users
3. Find your user
4. Go to Metadata tab
5. Under Public Metadata, add:
   ```json
   {
     "role": "admin"
   }
   ```
6. Save changes
7. **Important**: Sign out and sign back in for changes to take effect

### Option 3: Use API to Update Role (If you have another admin)
If you have access to another admin account, you can update your role via the API:

```bash
# Replace YOUR_USER_ID with your Clerk user ID
curl -X POST http://localhost:3000/api/admin/update-role \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "YOUR_USER_ID",
    "role": "admin"
  }'
```

### Option 4: Create Admin User via API
If you don't have any admin user yet, you can create one:

1. Go to `/admin/users` (if accessible)
2. Or use the create user API:
```bash
curl -X POST http://localhost:3000/api/clerk/users/create \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "SecurePassword123",
    "firstName": "Admin",
    "lastName": "User",
    "role": "admin"
  }'
```

## Verify Fix

After setting the role:
1. **Sign out** from your application
2. **Sign back in** (this refreshes the session)
3. Try accessing `/admin` again
4. It should work now!

## Troubleshooting

### Still Not Working?
1. Check if role is set correctly:
   - Visit `/api/admin/check-role`
   - Verify `role` is `"admin"` (not `"Administrateur"`)

2. Clear browser cache and cookies
3. Sign out and sign back in
4. Check browser console for errors
5. Check server logs for middleware errors

### Common Issues

**Issue**: Role shows as "not set"
- **Solution**: Set the role in Clerk Dashboard (Option 2)

**Issue**: Role is set but still denied
- **Solution**: Sign out and sign back in to refresh session

**Issue**: Middleware error in logs
- **Solution**: Check if `CLERK_SECRET_KEY` is set correctly in `.env`

## Technical Details

The middleware now:
1. Checks if user is authenticated
2. Fetches user from Clerk API
3. Checks `user.publicMetadata.role === 'admin'`
4. Allows access if role is admin, otherwise redirects

This is more reliable than checking session claims because:
- Session claims might not include publicMetadata
- User metadata is always available via API
- Role changes require re-login to take effect

## Security Note

- Only users with `role: 'admin'` in `publicMetadata` can access `/admin` routes
- Role must be exactly `"admin"` (case-sensitive)
- Changes to role require re-login to take effect
- Middleware checks happen server-side (secure)

