# Assets Folder

This folder contains images and media assets for the Real2Anime frontend.

## Background Images

### Goku Ultra Instinct
- **goku-ui.jpg** - Main Goku Ultra Instinct background image (from user upload)
- **goku-ui-alt.png** - Alternative AI-generated Goku Ultra Instinct background

## Usage

The background images are used in the application via CSS:
- Located in: `src/index.css`
- Applied as a fixed background with animated glow effects
- Opacity and blur effects create an epic anime atmosphere

## Changing the Background

To change the background image, simply:
1. Add your new image to this `public/assets/` folder
2. Update the CSS in `src/index.css` at the `body::after` selector:
   ```css
   background-image: url('/assets/your-image-name.jpg');
   ```

## Image Specifications

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 1920x1080 or higher for best quality
- **Aspect Ratio**: 16:9 works best for full-screen backgrounds
