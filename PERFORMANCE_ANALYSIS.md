# Performance Analysis - Unused Requests & Optimizations

## Issues Found

### 1. ✅ FIXED: Typo in API Route Filename
- **File**: `gct/app/api/sanity/appel-offre/count/rout.ts`
- **Issue**: Filename is `rout.ts` instead of `route.ts`
- **Impact**: Next.js might not recognize this route properly
- **Status**: ✅ Fixed - Created `route.ts` and removed `rout.ts`

### 2. ✅ FIXED: Duplicate Hero Section on Homepage
- **File**: `gct/app/page.tsx`
- **Issue**: Two hero sections - one hardcoded (lines 35-60) and one using fetched data (lines 62-132)
- **Impact**: Unnecessary rendering, slower page load, duplicate content
- **Status**: ✅ Fixed - Removed duplicate hardcoded hero section

### 3. ✅ FIXED: SettingsContext Not Wrapped
- **Files**: `gct/app/admin/page.tsx`, `gct/app/admin/settings/page.tsx`
- **Issue**: `useSettings()` hook is used but `SettingsProvider` is never wrapped around the app
- **Impact**: 
  - Either the pages are broken (throwing errors)
  - OR settings are not being fetched (using default values)
  - Settings API call (`/api/sanity/settings`) might not be executed
- **Status**: ✅ Fixed - Added SettingsProvider to admin layout (only loads in admin pages, not public pages)

### 4. ⚠️ Client-Side Fetching in chaine/page.tsx
- **File**: `gct/app/chaine/page.tsx`
- **Issue**: Makes 4 separate Sanity queries in `useEffect` (client-side)
- **Impact**: 
  - Slower initial page load
  - Data fetched after page render (shows loading state)
  - Could be server-side rendered for better performance
- **Status**: ⚠️ Optimization Opportunity
- **Recommendation**: Convert to server-side component or create API route

### 5. ⚠️ Direct Sanity Client Usage in Admin Pages
- **Files**: 
  - `gct/app/admin/content/appels-offres/page.tsx`
  - `gct/app/admin/content/actualites/page.tsx`
  - `gct/app/admin/content/hero/page.tsx`
- **Issue**: Using `client.fetch()` directly instead of API routes
- **Impact**: 
  - Inconsistent data fetching patterns
  - Sanity client exposed to client-side (security concern if using write tokens)
  - No API layer for caching/optimization
- **Status**: ⚠️ Optimization Opportunity
- **Recommendation**: Use API routes for consistency

### 6. ✅ Admin Dashboard - Already Optimized
- **File**: `gct/app/admin/page.tsx`
- **Status**: ✅ Already using `Promise.all()` for parallel requests
- **Note**: Making 3 API calls is reasonable for dashboard stats

### 7. ⚠️ Homepage Hero Fetch - Partially Used
- **File**: `gct/app/page.tsx`
- **Issue**: Fetches hero data but only uses `titre` and `sousTitre` (other fields might be fetched unnecessarily)
- **Status**: ✅ Acceptable - Query is minimal and server-side

## Performance Recommendations

### High Priority
1. ✅ **Add SettingsProvider to admin layout** - Fixed: Now only loads in admin pages
2. **Monitor API route usage** - Settings API now only called in admin pages (optimal)

### Medium Priority
1. **Convert chaine/page.tsx to server-side** - Better initial load performance
2. **Standardize data fetching** - Use API routes consistently in admin pages
3. **Add caching** - Consider adding React Query or SWR for client-side data

### Low Priority
1. **Optimize Sanity queries** - Only fetch needed fields
2. **Add request deduplication** - Prevent duplicate requests in rapid navigation

## Unused/Unnecessary Requests

### Potentially Unused
- `/api/sanity/settings` - Only needed in admin, but SettingsProvider not wrapped
- SettingsContext fetch - May not be executing if provider missing

### All Other Requests Are Used
- `/api/sanity/appel-offre` - Used in services/appels/page.tsx
- `/api/sanity/appel-offre/count` - Used in admin/page.tsx
- `/api/sanity/actualite/count` - Used in admin/page.tsx
- `/api/clerk/users` - Used in admin pages
- `/api/candidature` - Used in admin/candidature/page.tsx
- All other routes appear to be actively used

## Summary

**Total Issues Found**: 7
**Critical Issues**: 1 (SettingsProvider) ✅ FIXED
**Fixed**: 3 (API route typo, duplicate hero, SettingsProvider)
**Optimization Opportunities**: 4

### Fixed Issues
1. ✅ API route typo (`rout.ts` → `route.ts`)
2. ✅ Duplicate hero section on homepage
3. ✅ SettingsProvider now properly wrapped in admin layout (only loads in admin, not public pages)

### Remaining Optimizations
1. Convert `chaine/page.tsx` to server-side rendering (optional performance improvement)
2. Standardize admin pages to use API routes instead of direct Sanity client (optional)
3. These are performance optimizations, not bugs

### Performance Impact
- **Before**: Settings API potentially not working, duplicate hero rendering, broken API route
- **After**: Settings only load in admin pages (optimal), homepage is cleaner, all API routes working
- **Result**: Faster public pages (no settings fetch), working admin pages, cleaner code

