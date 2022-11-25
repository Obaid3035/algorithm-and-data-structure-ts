function naiveStringSearch(str: string, search: string) {
    let matchCount = 0;
    for (let i = 0; i < str.length; i++) {
        let j = 0;
        while(j < search.length) {
            if (str[i + j] !== search[j]) break;
            if (j === search.length - 1)   matchCount++;
            j+= 1;
        }
    }
    return matchCount;
}

console.log(naiveStringSearch('wowomozomg', 'omg'))
