#!/bin/bash

# 🚀 Hostinger Deployment Script
# This script builds the project and prepares files for Hostinger upload

echo "🔨 Building project for production..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    echo "📁 Copying files to hostinger-deploy directory..."
    cp -r out/* hostinger-deploy/
    
    echo "✅ Files ready for deployment!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to Hostinger File Manager or use FTP"
    echo "2. Navigate to public_html folder"
    echo "3. Upload ALL contents from hostinger-deploy/ folder"
    echo "4. Make sure files are directly in public_html/ (not in a subfolder)"
    echo ""
    echo "🌐 Your portfolio will be live at your domain!"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi 