// don't need to remember , use documentation


// inbuilt package `fs` demo
import { writeFile } from "fs";
import {readFile} from "fs/promises"; 
// we can do file input / output easily with fs

const filePath = new URL('./index.html', import.meta.url );
let data = await readFile(filePath , {encoding : 'utf8'}) ;
console.log(data);

const obj = {
    title : "my custom title",
    body : "custom body",

}

for( const [key , value] of Object.entries(obj)) {
    data = data.replace(`{${key}}` , value) //title
}

//await works without async in global scope of ES module (not in CJS module)
await writeFile( new URL('./index.html' , import.meta.url) ,data );
