


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let temp;
    for(let i=0;i<nums.length;i++){
     for(let j=i+1; j<nums.length;j++){
         if(nums[i]>nums[j]){
            temp=nums[i]
            nums[i]=nums[j]
            nums[j]=temp
         
        }
    }
    }
    return nums
};
//this passes  11/13
//merge sort
var sortArray = function(nums) {
    
    function mergeSort(arr, l, r) {
        if (l >= r) return;
        let m = Math.floor((l + r) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }

    function merge(arr, l, m, r) {
        let temp = [];
        let i = l, j = m + 1;

        while(i <= m && j <= r) {
            if(arr[i] <= arr[j]) temp.push(arr[i++]);
            else temp.push(arr[j++]);
        }

        while(i <= m) temp.push(arr[i++]);
        while(j <= r) temp.push(arr[j++]);

        for(let k = l; k <= r; k++) {
            arr[k] = temp[k - l];
        }
    }

    mergeSort(nums, 0, nums.length - 1);
    return nums;
};
