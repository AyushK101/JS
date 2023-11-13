// error in callbacks :-
// ERROR FIRST CALLBACK 
// the first argument of the callback function is error

function fetchCustom(url , fn) {
    setTimeout(function process() {
        console.log("download complete" , url); 
        let response = "dummy data";
        fn(new Error("something") , response);       
    } , 3000);
}

fetchCustom("www.google.com" , function fun(err ,response) {    
    if(err) {
        console.log("error is " , err);
        return;
    }
    console.log("response is " , response);
})

