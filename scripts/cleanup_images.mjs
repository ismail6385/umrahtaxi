import fs from 'fs';
import path from 'path';

const mappingPath = path.join(process.cwd(), 'image_mapping.json');
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
const publicDir = path.join(process.cwd(), 'public');

let deletedCount = 0;

for (const oldPath of Object.keys(mapping)) {
    const filename = oldPath.substring(1); // remove leading slash
    const fullPath = path.join(publicDir, filename);

    if (fs.existsSync(fullPath)) {
        try {
            fs.unlinkSync(fullPath);
            console.log(`Deleted old file: ${filename}`);
            deletedCount++;
        } catch (err) {
            console.error(`Failed to delete ${filename}:`, err);
        }
    }
}

console.log(`Cleanup complete. Deleted ${deletedCount} files.`);
