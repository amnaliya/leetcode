/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let array=[]
    let newest=nums.sort((a,b)=>a-b).filter((value,index)=>{
        if(value===target){
            array.push(index)
        };
    })
    
    return array;
};