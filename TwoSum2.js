

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let first=0
    let second = nums.length-1 
    while( first<second){
        let sum= nums[first] +nums[second]
        if(sum===target) return [first+1, second+1 ]
       else if(sum> target) second--
       else  first++
        
    }
   
    
    
};
