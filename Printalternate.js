


// Input: arr[] = [10, 20, 30, 40, 50]
//Output: 10 30 50
//Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).

//Input: arr[] = [-5, 1, 4, 2, 12]
//Output: -5 4 12

// Iterate 

// Iterate JavaScript Program to print alternate elements
// of the array

function getAlternates(arr) {
    let res = [];
    
    // Iterate over all alternate elements
    for (let i = 0; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    return res;
}

// recursion
function alternate(arr,idx,res){

if (idx < arr.length) {
        res.push(arr[idx]);
        alternate(arr, idx + 2, res);
}
}

function getAlternate(){

  let res=[];
  alternate(arr,0,res)
  return res;


}
