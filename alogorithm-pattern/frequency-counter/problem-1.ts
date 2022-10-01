import {Types} from "./types";

/**
 ** Frequency Counter Pattern
 ** This pattern uses objects or set to collect values/frequencies of values
 ** this can often avoid nested looping or O(n^2)
 **/


/**
 ** Write a function same which accepts two array.
 ** The function should return true if every value in the first array has its corresponding value squared in the second array.
 ** The Frequency of values must be same
 **/


function same(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) return false;

    const frequencyCounter1: Types.frequencyCounter = {}
    const frequencyCounter2: Types.frequencyCounter = {}

    for (const val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (const val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (const key in frequencyCounter1) {
        if (!(parseInt(key) ** 2 in frequencyCounter2)) return false;
        if (frequencyCounter2[parseInt(key) ** 2] !== frequencyCounter1[key]) return false
    }
    return true;

}

console.log(same([4, 2, 4], [16, 16, 4]));
