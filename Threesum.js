

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
