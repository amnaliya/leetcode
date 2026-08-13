/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let arr=sentences.map((value)=>{
        return value.split(" ").length
    });
    let sorting=arr.sort((a,b)=>b-a);
    return sorting[0];
    
};