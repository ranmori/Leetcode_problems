/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 32-bit integer x,
    // reverse
    // return int that is not overflowed

    let res =0
    // as there are some negative numbers 
    // if x<0
    //  get rid of the - and then *-1
    if(x<0){
         res= parseInt(x.toString().slice(1).split('').reverse().join('')) * -1
    }else{
        res= parseInt(x.toString().split('').reverse().join(''))
    }
    // prevent overflow 
    if ( res < -(2 ** 31) || res > (2**31) - 1) 
    {
        return 0
    }
   return res;
};
