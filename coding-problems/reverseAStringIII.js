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
        word = [...word];
        let first = 0;
        while (first < index) {
            let temp = word[first];
            word[first] = word[index];
            word[index] = temp;
            first++;
            index--;
        }
        return word.join('');
    }
    return word;
};

console.log(reversePrefix('abcdefd', 'd'));