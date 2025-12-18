import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function forceCompress() {
    const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.webp'));
    let count = 0;

    for (const file of files) {
        const filePath = path.join(publicDir, file);
        const stats = fs.statSync(filePath);

        if (stats.size > 98 * 1024) { // safety margin
            console.log(`Compressing ${file} (${Math.round(stats.size / 1024)}KB) -> Target < 100KB`);

            const buffer = fs.readFileSync(filePath);

            // Try aggressive compression
            let outputBuffer = await sharp(buffer)
                .resize({ width: 1280, withoutEnlargement: true })
                .webp({ quality: 60 })
                .toBuffer();

            if (outputBuffer.length > 98 * 1024) {
                console.log(`Still too big, retrying with quality 40...`);
                outputBuffer = await sharp(buffer)
                    .resize({ width: 1024, withoutEnlargement: true })
                    .webp({ quality: 40 })
                    .toBuffer();
            }

            fs.writeFileSync(filePath, outputBuffer);
            const newStats = fs.statSync(filePath);
            console.log(`New size: ${Math.round(newStats.size / 1024)}KB`);
            count++;
        }
    }
    console.log(`Force compression complete. Processed ${count} files.`);
}

forceCompress();
