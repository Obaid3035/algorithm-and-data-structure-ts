/**
 ** Frequency Counter - areThereDuplicates
 ** Implement a function called areThereDuplicates which accepts a variable number of arguments,
 ** and checks whether there are any duplicates among the arguments passed in.
 */

import {Types} from "./types";

function areThereDuplicates(...args: string[] | number[]) {
    const frequencyCounter: Types.frequencyCounter = {}

    for (const val of args) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }

    for (const key in frequencyCounter) {
        if (frequencyCounter[key] > 1) return true
    }
    return false
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
