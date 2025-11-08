


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // create a hash map
    let res={}
    //iterate through the array
    for(let i of strs){
        // sort each word alphabetically and join
        let sorted = i.split("").sort().join("")
        // if the sorted isnt in the hash map
        if(!res[sorted]){
            // create  a empty array for that word as we haven't seen it before 
            res[sorted]=[]
            
        }
        // push it to res
        res[sorted].push(i)
    }
    // return values [[]]
    return Object.values(res)
    
};
