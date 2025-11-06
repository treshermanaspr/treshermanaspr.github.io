# Photo Instructions for Tres Hermanas PR Website

## Team Member Photos

To add team member photos (Ashley, Nicole Hammond, and Jacqueline Geraci), follow these steps:

### 1. Download Photos from Google Photos

**Ashley:**
- https://photos.app.goo.gl/yATYu3YDEbZdDPG29

**Nicole Hammond:**
- https://photos.app.goo.gl/ZUdFqkwrabu9MFRP8
- https://photos.app.goo.gl/3jT9u3VUB1Tn8L7x9
- https://photos.app.goo.gl/wfoKbJRZh2z6auVaA

**Jacqueline Geraci:**
- https://photos.app.goo.gl/2pB5JxvvukCs1aAFA
- https://photos.app.goo.gl/eVsX3wWF33n2f2Ka8
- https://photos.app.goo.gl/fSUoqDRVWRmPhAc69

### 2. Save Photos
Save the downloaded photos to `/uploads/team/` directory. Create this directory if it doesn't exist.

Suggested naming convention:
- `ashley-[number].jpg`
- `nicole-[number].jpg`
- `jacqueline-[number].jpg`

### 3. Add Team Section to Homepage

If you want to add a team section to the homepage, add the following after the Mission Statement section in `index.html`:

```html
<h3 class="editable">Our Team</h3>

<div class="team-grid">
	<div class="team-member">
		<img src="/uploads/team/ashley-1.jpg" alt="Ashley">
		<p>Ashley</p>
	</div>
	<div class="team-member">
		<img src="/uploads/team/nicole-1.jpg" alt="Nicole Hammond">
		<p>Nicole Hammond</p>
	</div>
	<div class="team-member">
		<img src="/uploads/team/jacqueline-1.jpg" alt="Jacqueline Geraci">
		<p>Jacqueline Geraci</p>
	</div>
</div>
```

### 4. Add CSS Styling (if needed)

Add the following to `/css/screen.scss` if the team grid doesn't display properly:

```scss
.team-grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 40px;
	margin: 40px 0;
	
	.team-member {
		text-align: center;
		max-width: 250px;
		
		img {
			width: 100%;
			border-radius: 10px;
			margin-bottom: 15px;
		}
		
		p {
			font-size: 1.4em;
			margin: 0;
		}
	}
}
```

## Little Library and Community Photos

Photos of the Little Library and kids reading books are referenced in the HTML comments in `index.html`. 

To add these photos to the photo gallery at the bottom of the page:

1. Download images from the Google Photos links listed in the HTML comment
2. Save them to `/uploads/hermanas-libros/` directory
3. Add entries to the `photos` array in the YAML front matter of `index.html`

Example:
```yaml
photos:
  - image: /uploads/hermanas-libros/ramey-park-1.jpg
    title: Little Library at Ramey Park
  - image: /uploads/hermanas-libros/kids-reading-1.jpg
    title: Kids enjoying books
```

## Note from Issue

The issue mentions: "I love the quote from the Ramey Park" - if there's a specific quote or sign at Ramey Park, consider featuring it prominently on the page.
