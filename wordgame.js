export function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (const word of words) {
        if (word.length >= longest.length) {
            longest = word;
        }
    }
    return longest;
}

export function shortestWord(sentence) { // Renamed from 'shortest' to 'shortestWord'
    const words = sentence.split(' ');
    let shortest = words[0];
    for (const word of words) {
        if (word.length <= shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}

export function wordLengths(sentence) {
    const words = sentence.split(' ');
    let totalLengths = 0; // Initialize totalLengths to 0
    for (const word of words) {
        totalLengths += word.length;
    }
    return totalLengths;
}
