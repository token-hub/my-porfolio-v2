export function firstLetterUpperCase(text) {
    if (!text || text.length < 2) return;
    return text[0].toUpperCase() + text.slice(1);
}
