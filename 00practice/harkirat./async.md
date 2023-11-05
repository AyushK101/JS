- js is single threaded but async programming let us do multithreaded tasks.
- async tasks are long running .
- ex: we are reading from some other file , until then js will wait therefore to tell js to not wait for it and move ahead .
- async tasks like setTimeout don't need JS's thread , they run on different core while JS thread run on main core , therefore JS keep on moving .
- some big task that we can do through async are
1. reading from the file 
2. talking to the database 
3. sending the network request   
etc...



- async : callstack , web api's , event-loop , callback queue 

- web api is your friend to which you give you give async task , ex: setTimeout .
- JS only runs sync code , it give async code to someone(web api's ) else to run.
- web api run on different thread .

- any function that get called asynchronously is callback .
- basically any function called by web api is callback .

- callback hell
```
setTimeout(function getmed1() {
    console.log("med 1 received");
    setTimeout(function getmed2() {
        console.log("med 2 received");
        setTimeout(function getmed3() {
            console.log("med 3 received ");
            .
            .
            .
        })
    })
})
```
