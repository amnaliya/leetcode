/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr=s.split(" ").sort((a,b)=>{
        return Number(a[a.length-1])- Number(b[b.length-1])
    })
    let newest=arr.map((value)=>value.slice(0,-1)).join(" ");
    return newest;
};