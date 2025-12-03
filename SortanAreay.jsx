


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let temp;
    for(let i=0;i<nums.length;i++){
     for(let j=i+1; j<nums.length;j++){
         if(nums[i]>nums[j]){
            temp=nums[i]
            nums[i]=nums[j]
            nums[j]=temp
         
        }
    }
    }
    return nums
};
//this passes  11/13
//merge sort
