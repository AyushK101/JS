//How JS  handles ASYNC operations ?
// most practical part , will interact daily //
/**
 * javascript is a single threaded language.
 * javascript by default only supports synchronous code execution .
 * SYNCHRONOUS JS : if there are 4 line of code , then the 3rd line will only be executed if and only if 2nd line's execution is done, no matter the amount of time .
 * NOTE : the above property of sync code execution only works for operations natively known to javascript . ex: for loop is given in js , therefore sync code execution .
 * 
 *  */

// JS RUNTIME : 
/**
 * initially when js was made , it was made to run inside browser only.
 * then what browser js what ? browser gave a lot of facilities to js program .
 * js need a lot of things like execution environment (browser used to give),in execution environment we had a lot of things like js engine that runs , parses ,reads  code etc.
 * So browser acted as a runtime . js alone is very weak . runtime provides a safe sophisticated environment . ex: js engine , dom api's etc
 * in 2009 , a person named Ryan Dahl tried to run js outside of the browser environment , in a new runtime environment .
 * so they tried to fetch js out of browser and put it inside a new runtime , node.
 * features of node : instead of browser based api's , now we were able to run js outside browser like ide , terminal etc , file system , processes , setTimeout , etc 
 * node is a js runtime : provide a lot of capabilities to js , so that js can run at full potential 
 * node and chrome uses same v8 engine 
 * 
 * 
 * now we know that runtime also provides functionalities that can be leveraged by JS .
 * but how js handles them ?
 * 
 * 
 */

function process( )  {
    console.log("start");
    setTimeout(function exec() {
        
        console.log("executed some task")
    }, 3000);
    for(let i = 0; i<100000000; i++) { //8 sec 
        //some task
    }
    console.log("end");
}

process();
console.log("bye bye ");

/**
 * we have a few questions to answer 
 * 1. we can easily do tasks that take a lot of time to complete without blocking the code flow . how ?
 * ans: 
 */

/**
 * setTimeout:  browser / node (runtime) based feature . js don't know how to execute it . js will take this call to the runtime .
 * even if runtime completed its task before loop/js , js won't listen to runtime and will keep on executing its own native code.
 * it can't hinder the flow of js , therefore it will make the callback and wait in the queue . 
 * runtime will pass that callback to event queue , it will wait in there . when it will be executed ?
 * event loop is kind of like a infinite loop . it will keep on check for the "conditions" .
 * if the conditions are true , it will pop out the first task(inner-most) from the event queue and get entry in the call stack and executing it .
 * the conditions to start executing tasks from event queue are , 
 * 1. the call stack should be empty i.e. no function in the call stack is left to be executed .
 * 2. the global code is also done. 
 * 3. 
 * 
 */



