/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max=0;
    for(let arr of accounts){
        let total=0;
        for(let money of arr){
            total += money
        }
        if(total >max){
            max=total
        }
    }
    return max;

};