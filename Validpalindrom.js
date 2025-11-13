

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === null) return true;
    let arr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left=0;
    let right =arr.length-1 
    while(left<right) {
        if(arr[left] !== arr[right]) return false
        left++
        right--
    }
    return true
};
