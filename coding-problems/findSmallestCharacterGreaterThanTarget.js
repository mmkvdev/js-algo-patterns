/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if (letters[0].charCodeAt(0) > target || target >= letters[letters.length - 1]) {
        return letters[0];
    }
    let mid, low = 0, high = letters.length - 1;
    
    while (low < high) {
        mid = Math.floor((low+high) / 2);
        if (letters[mid] > target) {
            high = mid;
        } else if (letters[mid] <= target) {
            low = mid + 1;
        }
    }
    
    return letters[low];
};