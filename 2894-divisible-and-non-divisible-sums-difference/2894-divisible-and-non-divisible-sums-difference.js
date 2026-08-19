/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let rslt=[];
    for(let i=1;i<=n;i++){
        rslt.push(i);
    }
    let store=rslt.filter((value)=>
        value%m !==0
    ).reduce((a,b)=>a+b,0);
    let store2=rslt.filter((value)=>
        value%m === 0
    ).reduce((a,b)=>a+b,0);
    return store-store2;
};