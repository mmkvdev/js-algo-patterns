/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

var checkCharInWord = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            return i;
        }
    }
    return 0;
}

var reversePrefix = function(word, ch) {
    let index = checkCharInWord(word,ch);
    if (index) {
        let first = 0;
        while (first < index) {
            word[first] = word[index];
            console.log(word);
            first++;
            index--;
        }
        return word;
    }
};

console.log(reversePrefix('abcdefd', 'd'));