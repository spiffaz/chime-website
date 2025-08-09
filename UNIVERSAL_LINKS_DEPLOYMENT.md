# Universal Links Deployment Guide for GitHub Pages

## ✅ Files Already Added 

1. **AASA File**: `src/.well-known/apple-app-site-association`
   - ✅ Team ID already updated: `Y224FSGA47`
   - Ready for deployment

2. **Landing Page**: `src/join/index.html`
   - Handles invitation codes from URL
   - Smart app detection
   - Fallback for users without app

3. **404 Handler**: `src/404.html`
   - Routes `/join/CODE` URLs to the landing page
   - Required for GitHub Pages routing

## 🚀 Deployment Steps

### 1. Build and Deploy to GitHub Pages

```bash
cd "/Users/spiff.azeta/Documents/my projects/chime website/chime-website"

# Build the website (copies everything to dist/)
npm run build

# Commit and push to GitHub
git add .
git commit -m "Add Universal Links support for Chime app"
git push origin main
```

### 2. Verify Deployment

After GitHub Pages updates (usually within 5 minutes):

1. **Check AASA file**: https://chimealarm.app/.well-known/apple-app-site-association
   - Should return JSON with your Team ID

2. **Check landing page**: https://chimealarm.app/join/TEST123
   - Should show the invitation page with code "TEST123"

### 3. Configure Xcode (REQUIRED)

In your Chime Xcode project:

1. Select your project in Xcode
2. Go to "Signing & Capabilities" tab
3. Click "+ Capability"
4. Add "Associated Domains"
5. Add these domains:
   ```
   applinks:chimealarm.app
   applinks:www.chimealarm.app
   ```

### 4. Update App Store ID (When Available)

When you get your App Store ID, update the landing page:

```bash
# In src/join/index.html, replace APP_ID with your actual ID
# Search for: href = 'https://apps.apple.com/app/chime/id' + 'APP_ID'
# Replace with: href = 'https://apps.apple.com/app/chime/id' + '1234567890'
```

## 🧪 Testing Checklist

### Immediate Tests (After Deployment)

- [ ] Visit https://chimealarm.app/.well-known/apple-app-site-association
  - Should show JSON file with your Team ID
  
- [ ] Visit https://chimealarm.app/join/TEST123
  - Should show landing page with code "TEST123"

### iOS App Tests (Physical Device Required)

**⚠️ IMPORTANT**: Must use physical iPhone, not simulator!

1. Build and install app on your iPhone via Xcode
2. Wait 10-15 minutes (iOS needs time to fetch AASA file)
3. Send yourself a message with: `https://chimealarm.app/join/TEST123`
4. Tap the link - it should open Chime directly

### If Universal Links Don't Work

**Common fixes:**
1. Delete app from phone
2. Restart iPhone
3. Reinstall app via Xcode
4. Wait 10-15 minutes
5. Try link again

**Validate AASA:**
- Use Apple's tool: https://search.developer.apple.com/appsearch-validation-tool/
- Enter: chimealarm.app
- Should show "Valid" status

## 📱 How It Works

1. **User shares group**: App generates `https://chimealarm.app/join/ABC123`

2. **Recipient taps link**:
   - **Has app**: iOS reads AASA file → Opens Chime directly
   - **No app**: Opens landing page → Shows code & download button

3. **GitHub Pages routing**:
   - `/join/ABC123` → 404.html → Redirects to `/join/#ABC123`
   - Landing page reads code from URL or hash

## 🔧 Troubleshooting

### AASA File Not Working
```bash
# Check if file is accessible
curl -I https://chimealarm.app/.well-known/apple-app-site-association

# Should return:
# HTTP/2 200
# content-type: application/json
```

### Landing Page Shows "INVALID" Code
- Check URL format: Should be `/join/CODE` not just `/join/`
- Check 404.html is deployed

### App Not Opening from Link
- Ensure Associated Domains capability is added in Xcode
- Check Team ID matches: `Y224FSGA47`
- Must test on physical device
- iOS can cache AASA for up to 48 hours

## 📊 Next Steps

After deployment works:

1. **Add Google Analytics** to landing page for tracking
2. **Update App Store ID** when app is published
3. **Monitor analytics** in PostHog for:
   - `universal_link_invitation_shared`
   - `universal_link_opened`
   - `group_joined_via_universal_link`

## 🎉 Success Criteria

You'll know it's working when:
1. AASA file is accessible at correct URL
2. Landing page shows with invitation codes
3. Links open app directly on devices with Chime installed
4. Analytics events are firing in PostHog

---

**Need help?** The implementation is complete. Just build, commit, and push to deploy!