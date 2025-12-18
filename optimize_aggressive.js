const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = './public';
const quality = 60; // Lower quality for aggressive optimization
const maxWidth = 1000; // Smaller width

const filesToOptimize = [
    'zip-mina.webp',
    'zip-uhud.webp',
    'zip-hira.webp',
    'makkah-clock-tower-new.webp',
    'gmc-yukon-context.webp',
    'madinah-umbrellas.webp',
    'madinah-night-view.webp',
    'toyota-hiace-context.webp',
    'jeddah-corniche-road.webp',
    'toyota-camry-context.webp',
    'taif-rose-gardens.webp',
    'green-dome-detail.webp',
    'makkah-grand-mosque.webp',
    'jeddah-city-night.webp',
    'alula-hegra-tombs.webp',
    'family-arrival.webp',
    'taif-mountains-view.webp'
];

async function optimizeImages() {
    console.log('Starting aggressive optimization...');

    for (const file of filesToOptimize) {
        const filePath = path.join(directory, file);
        if (fs.existsSync(filePath)) {
            try {
                const buffer = await fs.promises.readFile(filePath);

                await sharp(buffer)
                    .resize(maxWidth, null, { withoutEnlargement: true })
                    .webp({ quality: quality })
                    .toFile(filePath + '.temp');

                // Replace original with optimized
                fs.renameSync(filePath + '.temp', filePath);

                const stats = fs.statSync(filePath);
                console.log(`Optimized ${file}: ${(stats.size / 1024).toFixed(2)} KB`);
            } catch (error) {
                console.error(`Error processing ${file}:`, error);
            }
        } else {
            console.log(`File not found: ${file}`);
        }
    }
}

optimizeImages();
