#!/bin/bash

# 🚀 Netlify Deployment Script
# This script automates the build and deployment process

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

print_status "Node.js version: $(node -v) ✓"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed"
else
    print_status "Dependencies already installed ✓"
fi

# Clean previous build
if [ -d "out" ]; then
    print_status "Cleaning previous build..."
    rm -rf out
    print_success "Previous build cleaned"
fi

# Run linting (optional, will continue even if it fails)
print_status "Running linter..."
if npm run lint; then
    print_success "Linting passed"
else
    print_warning "Linting failed, but continuing with build..."
fi

# Build the project
print_status "Building the project..."
if npm run build; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Check if build output exists
if [ ! -d "out" ]; then
    print_error "Build output directory 'out' not found"
    exit 1
fi

# Check if index.html exists
if [ ! -f "out/index.html" ]; then
    print_error "index.html not found in build output"
    exit 1
fi

print_success "Build verification passed"

# Display build info
BUILD_SIZE=$(du -sh out | cut -f1)
FILE_COUNT=$(find out -type f | wc -l | tr -d ' ')
print_status "Build size: $BUILD_SIZE"
print_status "Total files: $FILE_COUNT"

echo ""
print_success "🎉 Build completed successfully!"
echo ""
print_status "Next steps for Netlify deployment:"
echo "  1. Push to your Git repository:"
echo "     git add ."
echo "     git commit -m 'feat: prepare for deployment'"
echo "     git push origin main"
echo ""
echo "  2. Or deploy manually:"
echo "     npx netlify-cli deploy --prod --dir=out"
echo ""
echo "  3. Or drag & drop the 'out' folder to Netlify dashboard"
echo ""
print_status "Your site will be available at: https://your-site-name.netlify.app"
echo "" 