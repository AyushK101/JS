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


export default {
    linearSearch ,
    fun : function hero() {
        console.log("king");
    } 
}

export {
    linearSearch , 
    binarySearch
}