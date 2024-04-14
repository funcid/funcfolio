export const icons = [
    "black_brackets",
    "black_dots",
    "black_square",
    "link",
    "black_lines",
    "black_plus",
    "black_flower",
    "black_aim",
    "black_angle",
    "black_frog",
    "black_bubble",
    "black_sadness"
].map(name => `<img src="src/lib/images/icon/${name}.svg?raw">`)

export function getRandomIcon() {
    return icons[Math.floor(Math.random() * icons.length)];
}