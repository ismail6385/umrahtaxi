import fs from 'fs';
import path from 'path';

const mappingPath = path.join(process.cwd(), 'image_mapping.json');
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

// Directories to scan
const scanDirs = ['app', 'components', 'lib', 'data'];

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (/\.(tsx|ts|js|jsx)$/.test(file)) {
                arrayOfFiles.push(path.join(dirPath, file));
            }
        }
    });

    return arrayOfFiles;
}

function updateReferences() {
    let allFiles = [];
    for (const d of scanDirs) {
        const fullPath = path.join(process.cwd(), d);
        if (fs.existsSync(fullPath)) {
            allFiles = allFiles.concat(getAllFiles(fullPath));
        }
    }

    console.log(`Scanning ${allFiles.length} files for references...`);

    let changedFiles = 0;

    for (const file of allFiles) {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        let hasChange = false;

        // Apply all mappings
        for (const [oldPath, newPath] of Object.entries(mapping)) {
            // We replace both "/image.jpg" and "image.jpg" just in case, but usually it's absolute path in Next.js public
            // The mapping keys are like "/foo.jpg".
            // simple replaceAll
            if (content.includes(oldPath)) {
                content = content.split(oldPath).join(newPath);
                hasChange = true;
            }

            // Also try without leading slash if strictly needed, but Next.js usually uses /
            const oldPathNoSlash = oldPath.substring(1);
            const newPathNoSlash = newPath.substring(1);

            // Be careful not to replace 'foo/image.jpg' if we search 'image.jpg' broadly, 
            // but our filenames are distinct enough (timestamps etc).
            // Let's stick to the mapped keys first (with slash). 
            // If I see "gmc-yukon.jpg" without slash, it might be matched.
            if (content.includes(`"${oldPathNoSlash}"`)) {
                content = content.split(`"${oldPathNoSlash}"`).join(`"${newPathNoSlash}"`);
                hasChange = true;
            }
            if (content.includes(`'${oldPathNoSlash}'`)) {
                content = content.split(`'${oldPathNoSlash}'`).join(`'${newPathNoSlash}'`);
                hasChange = true;
            }
            if (content.includes(`\`${oldPathNoSlash}\``)) {
                content = content.split(`\`${oldPathNoSlash}\``).join(`\`${newPathNoSlash}\``);
                hasChange = true;
            }
        }

        if (hasChange && content !== originalContent) {
            console.log(`Updating references in: ${file}`);
            fs.writeFileSync(file, content, 'utf8');
            changedFiles++;
        }
    }

    console.log(`Updated ${changedFiles} files.`);
}

updateReferences();
