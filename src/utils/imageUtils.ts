export function getThumbnailUrl(originalUrl: string): string {
    // Добавляем суффикс _thumb перед расширением файла
    const lastDotIndex = originalUrl.lastIndexOf('.');
    if (lastDotIndex === -1) return originalUrl;
    
    return originalUrl.substring(0, lastDotIndex) + '_thumb' + originalUrl.substring(lastDotIndex);
}

export function getOptimizedImageUrl(originalUrl: string, width: number = 800): string {
    // Добавляем суффикс _optimized и размер перед расширением файла
    const lastDotIndex = originalUrl.lastIndexOf('.');
    if (lastDotIndex === -1) return originalUrl;
    
    return originalUrl.substring(0, lastDotIndex) + `_${width}w` + originalUrl.substring(lastDotIndex);
} 