#!/bin/bash

# 🚀 Hostinger Deployment Preparation Script

echo "🚀 Preparing for Hostinger deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Create deployment folder
echo "📁 Creating deployment folder..."
rm -rf hostinger-deploy
mkdir hostinger-deploy

# Copy all files from out folder
echo "📋 Copying files..."
cp -r out/* hostinger-deploy/

# Create .htaccess file
echo "⚙️ Creating .htaccess..."
cat > hostinger-deploy/.htaccess << 'EOF'
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static files
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# SPA routing support
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options DENY
    Header always set X-Content-Type-Options nosniff
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>
EOF

echo "✅ Ready for Hostinger!"
echo ""
echo "📁 Upload contents of 'hostinger-deploy' folder to your public_html directory"
echo "🌐 Your site will be live at your domain!"
echo "" 