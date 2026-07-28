/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vow=s.match(/[aeiou]/gi);
    let vowel=s.replace(/[aeiou]/gi, a=> vow.pop());
    return vowel;
};