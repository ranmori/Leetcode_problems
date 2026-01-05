/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    // so i know i need to use recursion here 
    // n = 3
    // ()()() (()())
    //  (
//     / \
//    ((  ()
//   / \   |
// ((( (() ()(
 // thinking.... loading
    // lemme see .........
    // base Case

    let res =[]
    

    function backtrack(current, open,closed){
        if(open === n && closed === n) 
        {
            res.push(current)
            return;
            }
        if(open<n) {
          backtrack(current + "(", open+1,closed)
        } 
        if( closed < open){
            backtrack(current + ")", open,closed+1)
        }
    }
    backtrack("",0,0)
  
   return res
};
