
/**
 ** Sliding Window - minSubArrayLen
 ** Write a function called minSubArrayLen which accepts two parameters -
 ** an array of positive integers and a positive integer.
 *
 ** This function should return the minimal length of a contiguous subarray
 ** of which the sum is greater than or equal to the integer passed to the function.
 ** If there isn't one, return 0 instead.
 */


function minSubArrayLen(arr: number[], num: number): number{
    let maxLen = 0;
    let sum = 0;


    while(sum < num && maxLen <= arr.length) {
        sum += arr[maxLen];
        maxLen++;
    }

    if (sum < num) return 0;
    let minLen = maxLen;
    let i = 0;
    while (maxLen + i - 1< arr.length) {
        if (sum >= num) {
            minLen = Math.min(minLen, maxLen);
            sum -= arr[i];
            i++;
            maxLen--;
        } else {
            sum += arr[i + maxLen]
            maxLen++;
        }
    }

    return minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
