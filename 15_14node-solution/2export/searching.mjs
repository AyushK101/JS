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

export default {
    linearSearch,
    fun : function d() {
        console.log("hi");
    }
}

export { //named
    binarySearch,
    linearSearch,
    
}
