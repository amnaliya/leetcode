/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let sett=[...new Set(nums)];
    if(sett.length>=3){
        return sett.sort((a,b)=>b-a)[2]
    }
    return Math.max(...sett)
};