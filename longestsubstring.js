/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Given a string s = [abcabcbb]
    // find the length longest substring without duplicate 
    // [ab] , abc , abca incorrect due to duplicates, 
    // abcbb , 
    // bca cab bcb abc 
    // do i use sliding window or two pointers ??

    let seta = new Set()
    let left =0;
    let Max = 0
    for (let right=0; right<s.length; right++){
       while (seta.has(s[right])) {
            seta.delete(s[left]);
            left++;
        }
        seta.add(s[right])
        Max= Math.max(Max, right - left + 1)
       
    }
     return Max;

};
