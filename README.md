# Tres Hermanas Blog

A Jekyll-based blog for Tres Hermanas.

## Local Development

### Prerequisites
- Ruby (2.7 or higher recommended)
- Bundler gem

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

3. Run the site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

The site will automatically reload when you make changes to files.

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
