

//Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal to all the elements to its right side.

//Note: The rightmost element is always a leader.



// iterate double loop
function leaders(arr) {
    const result = [];
    const n = arr.length;
    for(let i=0; i< n;i++){
      for(let j=i+1;j<n;j++){
        if(arr[i]< arr[j]{
          break;
        }
        if(j===n){
          result.push[j]
        }
      }
    }
  return result}

// Function to find the leaders in an array
function leaders(arr)
{
    const result = [];
    const n = arr.length;

    // Start with the rightmost element
    let maxRight = arr[n - 1];

    // Rightmost element is always a leader
    result.push(maxRight);

    // Traverse the array from right to left
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            maxRight = arr[i];
            result.push(maxRight);
        }
    }

    // Reverse the result array to maintain
    // original order
    result.reverse();

    return result;
}

// Driver code
const arr = [ 16, 17, 4, 3, 5, 2 ];
const result = leaders(arr);
console.log(result.join(" "))

