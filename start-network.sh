#!/bin/bash

# Start development server with network access
# This server will be accessible from other computers on the local network

echo "🌐 Starting Tres Hermanas PR website (network access)..."
echo "📍 Building Jekyll site..."

# Build the Jekyll site
bundle exec jekyll build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Jekyll build failed. Please check for errors above."
    exit 1
fi

# Get the local IP address
LOCAL_IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "Unable to detect IP")

echo "✅ Build complete!"
echo "🌐 Starting server with network access..."
echo "📱 Access from this computer: http://localhost:3000"
if [ "$LOCAL_IP" != "Unable to detect IP" ]; then
    echo "📱 Access from other devices: http://$LOCAL_IP:3000"
else
    echo "⚠️  Could not detect local IP address automatically"
    echo "📱 Find your IP with: ipconfig getifaddr en0"
    echo "📱 Then access from other devices: http://[YOUR-IP]:3000"
fi
echo "📝 Press Ctrl+C to stop the server"
echo ""
echo "🔒 Note: Make sure your firewall allows incoming connections"
echo "    (You may see a firewall prompt on first run)"
echo ""

# Start the HTTP server for network access
cd _site && npx http-server -p 3000 -a 0.0.0.0