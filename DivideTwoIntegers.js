/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // two integers 
    // dividend  divisor
    // without using multiplication, division, and mod operator.
    // if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is        strictly less than -231, then return -231.



    // edge case
      if (dividend === -2147483648 && divisor === -1) {
    return 2147483647;
}
// check if it is neagtive 
const Negative = Math.sign(divisor)!== Math.sign(dividend)
  let res=0
//   work with absolute values else it may break the comparsions
  dividend= Math.abs(dividend)
  divisor= Math.abs(divisor)
// while the dividend is > divisor
 while(dividend>= divisor ){
    // start the multiple from 1 coz we have one divisor
   let multiple=1
//    the divisor
   let value= divisor
//    bit manipulation starts
// as long as value*2 <= dividend
// we keep maultipltying value
// Can we double it?  Is $14 < 100$? Yes. (value = 14, multiple = 2)
// Can we double it? Is $28 < 100$? Yes. (value = 28, multiple = 4)
// Can we double it? Is $56 \leq 100$? Yes. (value = 56, multiple = 8)
   while(value+value <= dividend){
    value+=value
    multiple+=multiple
   }
//    We subtract 56 from 100. New Dividend = 44.
// We add 8 to our result. Total Quotient = 8.
   dividend= dividend - value;
   res+=multiple
//    and the loop continues

 }

  // Apply the sign
  let final = Negative ? - res :res
  // edge cases due to the two edge cases like why add it???
  if (final > 2147483647) return 2147483647;
    if (final< -2147483648) return -2147483648;

 return final;
};
