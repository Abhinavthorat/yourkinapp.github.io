#!/bin/bash

# Deploy Kin website to GitHub Pages
# Usage: ./deploy.sh

echo "🚀 Deploying Kin website to GitHub Pages..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Add all files
echo "📝 Adding files..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "Deploy Kin website to GitHub Pages"

# Check if remote exists
if ! git remote | grep -q "origin"; then
    echo "⚠️  No remote repository found!"
    echo "Please run:"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
    echo "Then run this script again."
    exit 1
fi

# Push to main branch
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Deployment complete!"
echo "📱 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Settings → Pages"
echo "3. Select 'main' branch as source"
echo "4. Your site will be live at: https://YOUR_USERNAME.github.io/YOUR_REPO"
echo "5. For custom domain, add DNS records as per README.md"

