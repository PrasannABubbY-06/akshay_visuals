// optimize-images.cjs
// Node script to compress JPEG images in public/images using sharp (70% quality)
// Overwrites the original files while preserving filenames.
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

fs.readdirSync(imagesDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') {
    const inputPath = path.join(imagesDir, file);
    const tmpPath = inputPath + '.tmp';
    sharp(inputPath)
      .rotate()
      .jpeg({ quality: 70, progressive: true })
      .toFile(tmpPath)
      .then(() => {
        fs.renameSync(tmpPath, inputPath);
        console.log(`Optimized ${file}`);
      })
      .catch(err => console.error(`Error optimizing ${file}:`, err));
  }
});
