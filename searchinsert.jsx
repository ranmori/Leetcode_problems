/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low=0
  let high = nums.length-1
  let mid;
  while(high >= low){
    mid = low + Math.floor((high-low)/2)
    if(nums[mid]===target) return  mid
    if(nums[mid]> target) {
        high= mid-1
     } else low= mid+1
  }
  return low
};
