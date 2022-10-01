import {Types} from "./types";

/**
 * Given 2 string, write a function to determine if the second string is an anagram of the first
 * An Anagram is a word or a phrase or a name formed by rearranging letters of another
 * such as cinema -> iceman
 **/


function anagram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const frequencyCounter: Types.frequencyCounter = {}

    for (const val of str1) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }

    for (const key of str2) {
        if (!(key in frequencyCounter)) return false
        if (frequencyCounter[key] <= 0) return false
        frequencyCounter[key] -= 1
    }
    return true

}

console.log(anagram('hello', 'olleh'))
