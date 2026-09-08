/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sumofnums=nums.reduce((a,b)=>a+b,0)
    let sumofdigits=0
    for(let element of nums){
        for(let digit of String(element)){
            sumofdigits+=Number(digit)
        }
    }
    return sumofnums-sumofdigits
};