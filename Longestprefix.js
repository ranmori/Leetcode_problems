


var longestCommonPrefix = function(strs) {

    let i = 0;
    for( ; i < strs[0].length; i++){

        if( !strs.every(e=> e[i] === strs[0][i]) ) 
            break;
    }

    return i === 0 ? "" : strs[0].slice(0,i);
};
