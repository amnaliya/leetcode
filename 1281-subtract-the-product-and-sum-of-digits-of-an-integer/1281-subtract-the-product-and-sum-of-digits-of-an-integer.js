/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let num=n.toString().split("")
    let prdct=num.reduce((a,b)=>Number(a*b));
    let sum=num.reduce((a,b)=>Number(a)+Number(b));
    return prdct-sum;
};