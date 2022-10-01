/**
 ** Creating pointers or values that corresponds to an index or position and
 ** move towards the beginning,end or middle based on certain condition.
 ** Very efficient for solving problems with minimal space complexity as well
 */

/**
 ** Write a function called sumZero which accept sorted array of integers.
 ** the function should find the first pair where the sum is 0.
 ** Return an array that include both values that sum to zero or undefined if a pair does not exist.
 **/


function sumZero(arr: number[]) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) return [arr[left], arr[right]]
        if (sum > 0) right--;
        else left++;
    }
    return undefined
}

console.log(sumZero([-2,-1,0,1,2,4,4]))
