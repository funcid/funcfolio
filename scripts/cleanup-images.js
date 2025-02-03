import { promises as fs } from 'fs';
import path from 'path';

const PHOTO_DIRS = [
    'static/photos/thailand',
    'static/photos/dubai',
    'static/photos/gelendzhik',
    'static/photos/japan',
    'static/photos/other'
];

async function cleanDirectory(dir) {
    try {
        await fs.access(dir);
    } catch {
        console.log(`Директория не существует: ${dir}`);
        return;
    }

    const files = await fs.readdir(dir);
    
    for (const file of files) {
        // Удаляем все оптимизированные версии
        if (file.includes('_thumb') || file.includes('_800w') || file.includes('_1200w') || file.endsWith('.webp')) {
            const filePath = path.join(dir, file);
            try {
                await fs.unlink(filePath);
                console.log(`✓ Удален файл: ${file}`);
            } catch (error) {
                console.error(`✗ Ошибка при удалении ${file}:`, error);
            }
        }
    }
}

async function main() {
    console.log('Начинаем очистку оптимизированных изображений...');
    
    for (const dir of PHOTO_DIRS) {
        console.log(`\nОчищаем директорию: ${dir}`);
        await cleanDirectory(dir);
    }
    
    console.log('\nОчистка завершена!');
}

main().catch(console.error); 