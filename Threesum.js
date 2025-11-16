

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // brute force o(n^3)
    // new Set to avoid duplicates
    let set= new Set()
    let res=[]
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){

                if(nums[i] +nums[k] +nums[j] ===0){
                    
                    let trip = [nums[i], nums[j],nums[k]].sort((a,b)=> b-a)
                    let key = trip.join(",")
                    if(!set.has(key)){
                    set.add(key)
                    res.push(trip)
                    
                    }
                }
                
                
            }
        }
    }
    return res;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // sort them array
     nums.sort((a,b)=>a-b)
    let res=[]
    for(let i=0; i<nums.length; i++){
        // avoid duplicates 
        if(i>0 && nums[i] ===nums[i-1]) continue
        
        let left= i+1
        let right=nums.length-1

        while(left<right){
            let sum= nums[i] + nums[left] + nums[right]
            if(sum===0){
                res.push([nums[i],nums[left],nums[right]])
                left++
                right --

                 // skip duplicates
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;

                    
            }
            else if (sum <0) left ++
            else right--
            
        }
    }
    return res
};
