// Time Complexity

// If data is sorted = O(n)
// If data is unsorted = O(n2)

function bubbleSort(arr: number[]) {
    for (let i = arr.length; i > 0; i--) {
        let noSwap = true
        for (let j = 0; j < i - 1; j++) {
            console.log('PASS')
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwap = false
            }
        }
        if (noSwap) break;
    }
    return arr
}


console.log(bubbleSort([1,3,4,5,6]))
