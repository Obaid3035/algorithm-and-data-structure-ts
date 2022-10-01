/**
 ** Implement a function called countUniqueValues,
 ** which accept a sorted array.
 ** and counts the unique values in an array.
 ** there can be negative number in the array,
 ** but it will always be sorted
 **/


function countUniqueValues(arr: number[]) {
    if (arr.length === 0) return 0;
    let left = 0;
    let right = 1
    while (right < arr.length) {
        if (arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right]
            right++;
        } else right++;
    }
    return left + 1;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
