

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let c= null
    let i=0;
    let count=0
    while(i<nums.length){
        if(count===0) c =nums[i]
       count += (nums[i] === c) ? 1 : -1;
     
        i++
    }
      return c

};
