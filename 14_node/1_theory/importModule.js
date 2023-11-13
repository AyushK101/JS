const searching = require('./searching.js'); // cjs
import searching from './searching.js'; // mjs

let arr = [2,3,4,5,3,5,3,54,6];
let x = 54; 


console.log(searching.linear(arr , x));

