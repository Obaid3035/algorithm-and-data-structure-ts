
/**
 ** Write a function same which accepts two array.
 ** The function should return true if every value in the first array has its corresponding value squared in the second array.
 ** The Frequency of values must be same
 **/

type frequencyCounter = { [key: number]: number}

function same(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) return false;

    const frequencyCounter: frequencyCounter = {}
    for (const val of arr2) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }

    for (const val of arr1) {
        if (!(val ** 2 in frequencyCounter)) return false;
        if (frequencyCounter[val ** 2] === 0) return false;
        frequencyCounter[val ** 2] -= 1;
    }
    return true;

}

console.log(same([4, 2, 4], [16, 16, 4]));
