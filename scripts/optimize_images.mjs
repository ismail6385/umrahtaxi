import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const mappingFile = path.join(process.cwd(), 'image_mapping.json');

// Helper to clean filename
function cleanFilename(filename) {
    const ext = path.extname(filename);
    let name = path.basename(filename, ext);

    // Remove timestamp suffix if it looks like _1765977083362
    name = name.replace(/_\d{10,}$/, '');

    // specific fixes for known patterns if strictly needed, but regex should cover it.

    // Replace underscores and spaces with hyphens
    name = name.replace(/[_\s]+/g, '-');

    // Lowercase
    name = name.toLowerCase();

    return `${name}.webp`;
}

async function optimizeImages() {
    const files = fs.readdirSync(publicDir);
    const mapping = {};

    const images = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

    console.log(`Found ${images.length} images to optimize.`);

    for (const file of images) {
        const oldPath = path.join(publicDir, file);
        const newFilename = cleanFilename(file);
        const newPath = path.join(publicDir, newFilename);

        console.log(`Optimizing: ${file} -> ${newFilename}`);

        try {
            await sharp(oldPath)
                .resize({ width: 1920, withoutEnlargement: true }) // limit max width
                .webp({ quality: 80 }) // 80 quality webp is usually very efficient
                .toFile(newPath);

            // Verify size
            const stats = fs.statSync(newPath);
            if (stats.size > 100 * 1024) {
                console.log(`Warning: ${newFilename} is ${stats.size / 1024}KB, trying lower quality...`);
                // second pass if needed, but 80 webp is usually small.
                // Force lower quality if specific size constraint is needed strictly.
                await sharp(oldPath)
                    .resize({ width: 1600, withoutEnlargement: true })
                    .webp({ quality: 60 })
                    .toFile(newPath);
            }

            mapping[`/${file}`] = `/${newFilename}`;

        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }

    // Write mapping
    fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2));
    console.log('Mapping saved to image_mapping.json');
}

optimizeImages();
