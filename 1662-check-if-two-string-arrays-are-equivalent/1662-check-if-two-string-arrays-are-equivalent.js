/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let first=word1.reduce((a,b)=>a+b);
    let scnd=word2.reduce((a,b)=>a+b);
    return first===scnd;
};