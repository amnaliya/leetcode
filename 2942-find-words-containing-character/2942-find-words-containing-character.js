/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr=[]
    let newest=words.filter((value,index)=>{
        if(value.includes(x)){
            arr.push(index)
        }
    })
    return arr;
};