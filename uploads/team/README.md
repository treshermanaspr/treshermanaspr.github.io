# Team Photos Directory

This directory contains photos of the Tres Hermanas team members, founders, and directors.

## Instructions for Adding Photos

### Marion's Photo
Download one of these images:
- Option 1: https://photos.app.goo.gl/YG6NJ9cTti8LdFxo9
- Option 2: https://photos.app.goo.gl/SKAdyUAaftmfDoVe8

Save the chosen image as `marion.jpg` in this directory.

### Helena Geraci's Photo
Once the photo is provided, save it as `helena.jpg` in this directory.

### Rose Geraci's Photo
Once the photo is provided, save it as `rose.jpg` in this directory.

### Aunchalee Moira Palmquist's Photo
If a photo is provided, save it as `aunchalee.jpg` in this directory.

## Updating the Who We Are Page

After adding photos to this directory:

1. Open `/pages/who-we-are.html`
2. Find the corresponding placeholder comment for each person
3. Replace the placeholder `<div>` with an `<img>` tag

Example:
```html
<!-- Replace this: -->
<div style="background: #f0f0f0; padding: 40px; text-align: center; border: 2px dashed #ccc;">
  <p><strong>Marion's Photo</strong></p>
  <p style="font-size: 0.9em;">Photo to be added</p>
</div>

<!-- With this: -->
<img src="/uploads/team/marion.jpg" alt="Marion">
```

## Recommended Image Specs

- Format: JPG or PNG
- Recommended width: 400-800px
- Aspect ratio: Square (1:1) or portrait orientation works best
- File size: Keep under 500KB for optimal web performance
