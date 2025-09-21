#!/bin/bash

# Start local development server (localhost only)
# This server will only be accessible from this computer

echo "🚀 Starting Tres Hermanas PR website (localhost only)..."
echo "📍 Building Jekyll site..."

# Build the Jekyll site
bundle exec jekyll build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Jekyll build failed. Please check for errors above."
    exit 1
fi

echo "✅ Build complete!"
echo "🌐 Starting server at http://localhost:3000"
echo "📝 Press Ctrl+C to stop the server"
echo ""

# Start the HTTP server for localhost only
cd _site && npx http-server -p 3000 -a 127.0.0.1