# Deploy to GitHub Pages

## Quick Deploy Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Repository name: `yourkinapp` (or your choice)
3. Make it **Public** (required for free GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license
5. Click "Create repository"

### 2. Push Your Code

Open terminal in the `website` directory and run:

```bash
cd website

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Kin website"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/yourkinapp.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 4. Your Site is Live!

Your site will be available at:
- `https://YOUR_USERNAME.github.io/yourkinapp`

(It may take 1-2 minutes to go live)

---

## Custom Domain Setup (yourkinapp.com)

### Step 1: Update CNAME File

The `CNAME` file is already set to `yourkinapp.com`. If you want a different domain, edit it.

### Step 2: Configure in GitHub

1. Go to repository **Settings → Pages**
2. Under **Custom domain**, enter: `yourkinapp.com`
3. Check **Enforce HTTPS** (after DNS is set up)
4. Click **Save**

### Step 3: Configure DNS

Go to your domain registrar (where you bought yourkinapp.com) and add:

**Option A: A Records (Recommended)**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**Option B: CNAME Record**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600
```

### Step 4: Wait for DNS Propagation

- DNS changes can take 24-48 hours
- GitHub will automatically provision SSL certificate
- Check status in repository Settings → Pages

---

## Updating Your Site

After making changes:

```bash
cd website
git add .
git commit -m "Update website"
git push
```

Changes will be live in 1-2 minutes!

---

## Troubleshooting

**Site not loading?**
- Check repository is Public
- Verify Pages is enabled in Settings
- Wait 2-3 minutes after first push

**Custom domain not working?**
- Verify DNS records are correct
- Wait 24-48 hours for propagation
- Check domain status in GitHub Settings → Pages

**Need help?**
- GitHub Pages docs: https://docs.github.com/en/pages
- Check repository Settings → Pages for status

