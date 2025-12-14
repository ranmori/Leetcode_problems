


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res=[]
    let i=0;
    let k=0
     while(i<word1.length && k<word2.length){
       res.push(word1[i++]+(word2[k++]))
        
     }
    res.push(word1.slice(i))
    res.push(word2.slice(k))
    return res.join("");
};
