const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateFavicon() {
  const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
  
  // Generate a 48x48 PNG favicon with rounded square background
  const size = 48;
  const radius = 10;
  const roundedRect = Buffer.from(
    `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="white"/></svg>`
  );
  const logoResized = await sharp(logoPath)
    .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();
  const pngBuffer = await sharp(roundedRect)
    .composite([{ input: logoResized, blend: 'over' }])
    .png()
    .toBuffer();

  // Generate a 180x180 apple-touch-icon
  const appleTouchBuffer = await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 246, g: 241, b: 234, alpha: 1 } })
    .png()
    .toBuffer();

  // Generate a 192x192 icon for web manifest
  const icon192Buffer = await sharp(logoPath)
    .resize(192, 192, { fit: 'contain', background: { r: 246, g: 241, b: 234, alpha: 1 } })
    .png()
    .toBuffer();

  // Generate a 512x512 icon for web manifest
  const icon512Buffer = await sharp(logoPath)
    .resize(512, 512, { fit: 'contain', background: { r: 246, g: 241, b: 234, alpha: 1 } })
    .png()
    .toBuffer();

  // Save files
  const appDir = path.join(__dirname, '..', 'src', 'app');
  const publicDir = path.join(__dirname, '..', 'public');

  // Generate ICO-like favicon (save as PNG, Next.js supports it)
  fs.writeFileSync(path.join(appDir, 'icon.png'), pngBuffer);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), appleTouchBuffer);
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), icon192Buffer);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), icon512Buffer);

  console.log('✓ Generated icon.png (48x48) in src/app/');
  console.log('✓ Generated apple-icon.png (180x180) in src/app/');
  console.log('✓ Generated icon-192.png (192x192) in public/');
  console.log('✓ Generated icon-512.png (512x512) in public/');
}

generateFavicon().catch(console.error);
