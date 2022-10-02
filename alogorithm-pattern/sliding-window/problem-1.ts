/**
 ** Sliding Window Pattern
 ** This pattern involves creating a window which can either can be an array or a number from 1 position to another.
 ** Depending on the condition the window is either increases or decreases ( and a new window is created)
 ** Very useful for keeping track of a subset of data in an array/string etc
 **/

/**
 ** Function which accepts an array of integers and a number called n.
 ** The function should calculate the maximum sum of n consecutive elements
 ** in the array.
 */


function maxSubArraySum(arr: number[], num: number): number {
    let tempSum = 0;
    let maxSum = 0;
    if (num > arr.length) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return  maxSum
}

console.log(maxSubArraySum([4,5,3,5,3,2,1], 2))
