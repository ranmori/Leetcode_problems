

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l =0; // next position for 0
    let r= nums.length-1 // next position for 2
    let i=0
    while(i<=r){
        if(nums[i]===0){
           [ nums[l],nums[i]]= [nums[i], nums[l]]
            l++
            i++
        }
        else if(nums[i]===2){
           [ nums[r], nums[i]]=[ nums[i],nums[r]]
            r--
        }
     else {
         i++
     }
    
    }
    return nums
};
