# IC Parking — PWA Setup on GitHub Pages

## Step-by-step setup (10 minutes, free)

### Step 1 — Create GitHub account
Go to https://github.com/join and create a free account.

### Step 2 — Create repository
1. Click **New repository** (green button)
2. Name it exactly: `ic-parking`
3. Set to **Public**
4. Click **Create repository**

### Step 3 — Upload files
1. Click **"uploading an existing file"**
2. Drag ALL files from this folder into the upload area:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - `icon-192.png`
   - `icon-512.png`
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Under Source: select **Deploy from a branch**
3. Branch: `main` / `root`
4. Click **Save**
5. Wait ~2 minutes → your URL will be: `https://YOUR-USERNAME.github.io/ic-parking/`

### Step 5 — Install on devices
Open the URL on any device:
- **Android**: Chrome shows "Add to Home Screen" banner automatically
- **iPhone/iPad**: Safari → Share ↑ → "Add to Home Screen"
- **Desktop**: Chrome shows install icon (⊕) in address bar

## Default logins
| Role | Username | Password |
|------|----------|----------|
| Guard | guard01 | guard1234 |
| Admin | admin | admin1234 |
| Manager | manager | manager1234 |
| Install password | — | ICP2025 |

## Your URL after setup
`https://YOUR-USERNAME.github.io/ic-parking/`

Send this URL to all staff — they open it once and tap "Add to Home Screen".
From then on, they tap the IC Parking icon and it opens instantly, no browser needed.
