function linearSearch (arr, x) {
    for(let i = 0; i <arr.length ; i++ ) {
        if(arr[i] === x) {
            return i;
        }
    }
    return NaN;
}
function binarySearch (arr,x)  {
    return 1;
}

console.log("searching file");
//exposing details to the outer world
module.exports = { 
    linear : linearSearch,
    binary : binarySearch
}

// module.exports = linearSearch;
