# 🚀 Hostinger Deployment Guide

## Quick Setup for Hostinger Static Hosting

### Step 1: Build Your Project

```bash
npm run build
```

### Step 2: Upload Files

1. Go to Hostinger **File Manager** or use **FTP**
2. Navigate to `public_html` folder
3. Upload ALL contents from the `out` folder (not the folder itself)
4. Your files should be directly in `public_html/`

### Step 3: File Structure in Hostinger

```
public_html/
├── index.html
├── _next/
├── favicon.ico
├── *.svg files
└── other static files
```

### Step 4: Configure .htaccess

Create `.htaccess` file in `public_html` with this content:

```apache
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
```

## That's it! 🎉

Your portfolio will be live at: `https://yourdomain.com`
