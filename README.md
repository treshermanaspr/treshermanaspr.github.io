# Tres Hermanas PR

A modern Jekyll-based website for Tres Hermanas, sharing books and inspiring young minds in Puerto Rico.

## 🚀 Quick Start

### Easy Development Scripts

We've included convenient scripts to start the development server:

**For local development (localhost only):**
```bash
./start-local.sh
```

**For network access (other devices can connect):**
```bash
./start-network.sh
```

**To make scripts executable (one-time setup)**
```bash
chmod +x start-local.sh start-network.sh
```

Both scripts will:
- Build the Jekyll site automatically
- Start a stable HTTP server
- Show you the access URLs
- Handle all the setup for you

## 🛠 Manual Development Setup

### Prerequisites
- Ruby (2.7 or higher recommended)
- Bundler gem
- Node.js (for http-server)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/treshermanaspr/treshermanaspr.github.io.git
   cd treshermanaspr.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. **Option A: Easy way (recommended)**
   ```bash
   chmod +x start-local.sh start-network.sh  # Make scripts executable
   ./start-local.sh                          # For local development
   ```

4. **Option B: Manual way**
   ```bash
   bundle exec jekyll build                  # Build the site
   cd _site                                  # Enter built site directory
   npx http-server -p 3000 -a 127.0.0.1     # Start localhost server
   ```

### Access URLs
- **Local development:** `http://localhost:3000`
- **Network access:** `http://[your-ip]:3000` (when using start-network.sh)

### Development Notes
- We use Node.js `http-server` instead of Jekyll's built-in server for better network stability
- The site builds to the `_site` directory
- Changes require rebuilding (restart the script or run `bundle exec jekyll build`)
- For network access, your firewall may prompt for permission

### Configuration

1. Update site details in `_config.yml`
2. Add your Google Analytics tracking ID to `_config.yml` (optional)

## Building for Production

To build the site for production:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The built site will be in the `_site` directory.

## SEO

This site uses the [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) plugin. Set a title in the front matter of each page for basic SEO optimization.
