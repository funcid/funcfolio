import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PHOTO_DIRS = [
    'static/photos/thailand',
    'static/photos/dubai',
    'static/photos/gelendzhik',
    'static/photos/japan',
    'static/photos/other'
];

async function optimizeImage(filePath) {
    const dir = path.dirname(filePath);
    const ext = path.extname(filePath);
    const name = path.basename(filePath, ext);
    
    try {
        // Создаем оптимизированную версию
        await sharp(filePath)
            .resize(1200, 1200, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .webp({ quality: 85 })
            .toFile(path.join(dir, `${name}.webp`));

        console.log(`✓ Оптимизировано: ${filePath}`);
    } catch (error) {
        console.error(`✗ Ошибка при оптимизации ${filePath}:`, error);
    }
}

async function processDirectory(dir) {
    try {
        await fs.access(dir);
    } catch {
        console.log(`Директория не существует: ${dir}`);
        return;
    }

    const files = await fs.readdir(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const ext = path.extname(file).toLowerCase();
        
        // Пропускаем уже оптимизированные файлы
        if (file.endsWith('.webp')) {
            continue;
        }
        
        // Обрабатываем только изображения
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
            await optimizeImage(filePath);
        }
    }
}

async function main() {
    console.log('Начинаем оптимизацию изображений...');
    
    for (const dir of PHOTO_DIRS) {
        console.log(`\nОбрабатываем директорию: ${dir}`);
        await processDirectory(dir);
    }
    
    console.log('\nОптимизация завершена!');
}

main().catch(console.error); 