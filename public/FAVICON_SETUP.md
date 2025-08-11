# Favicon Setup Instructions

This directory contains SVG favicon designs for the GSHI golf tournament website. To complete the favicon setup, you'll need to convert the SVG files to the proper formats.

## Files Created

- `favicon.svg` - Main scalable favicon (32x32 base)
- `icon-192.svg` - Large icon for PWA (192x192)
- `icon-512.svg` - Extra large icon for PWA (512x512)  
- `apple-touch-icon.svg` - Apple touch icon (180x180 with rounded corners)

## Required Conversions

To complete the favicon setup, convert these SVG files to PNG/ICO format:

### Using Online Tools (Recommended for quick setup)
1. **favicon.io** - Upload `favicon.svg` and generate a complete favicon package
2. **realfavicongenerator.net** - Upload `favicon.svg` for comprehensive favicon generation

### Using Command Line Tools

#### ImageMagick
```bash
# Convert to ICO
convert favicon.svg -resize 32x32 favicon.ico

# Convert to PNG files
convert icon-192.svg -resize 192x192 icon-192.png
convert icon-512.svg -resize 512x512 icon-512.png
convert apple-touch-icon.svg -resize 180x180 apple-touch-icon.png
convert favicon.svg -resize 16x16 icon-16x16.png
convert favicon.svg -resize 32x32 icon-32x32.png
```

#### Using Sharp (Node.js)
```javascript
const sharp = require('sharp');

// Convert favicon
sharp('favicon.svg')
  .resize(32, 32)
  .png()
  .toFile('favicon.ico');

// Convert other icons
sharp('icon-192.svg').resize(192, 192).png().toFile('icon-192.png');
sharp('icon-512.svg').resize(512, 512).png().toFile('icon-512.png');
sharp('apple-touch-icon.svg').resize(180, 180).png().toFile('apple-touch-icon.png');
```

## Files to Generate

After conversion, you should have:
- `favicon.ico` (32x32)
- `favicon.svg` (scalable)
- `icon-16x16.png`
- `icon-32x32.png`
- `icon-192.png`
- `icon-512.png`
- `apple-touch-icon.png`

## Design Details

The favicon features:
- **Golf ball design** with realistic dimples
- **Green theme** matching the GSHI brand colors (#16a34a)
- **Radial gradient** for 3D effect
- **Scalable vector format** for crisp display at any size
- **High contrast** for visibility in browser tabs

## Browser Support

The current implementation supports:
- ✅ Modern browsers (SVG favicon)
- ✅ Legacy browsers (ICO fallback)
- ✅ Apple devices (Apple touch icon)
- ✅ PWA/Android (manifest icons)
- ✅ Safari pinned tabs (mask icon)

## Next Steps

1. Convert SVG files to PNG/ICO using your preferred method
2. Replace the placeholder files with the generated images
3. Test the favicon displays correctly across different browsers and devices
4. Consider adding additional sizes if needed (48x48, 72x72, 96x96, 144x144)