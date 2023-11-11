const fs = require('fs');
const transformStream = require('stream'); //put a layer between readingStream and outputStream.
let fileStream = fs.createReadStream(__dirname + "/text.txt"); //(setup a readable stream from the file) read the data chunk by chunk 
let outputStream =  process.stdout; //storing the process.stdout stream inside a variable which is an output stream or writeable stream 



// making a modifiable transformable stream  
let middleStream = new transformStream.Transform({  
   transform(chunk , enc , nextCallback) {  
      let modifiedChunk = chunk.toString().toUpperCase();
      this.push(modifiedChunk); // going to push modified chunk in the output stream
      setTimeout( nextCallback , 3000); // we want to get it printed after 1 second
    //nextCallback => read next chunk
   }
    
})   

/**
* connect input from the fileStream to the outputStream ; syntax => readstream.pipe(outputstream) 
  fileStream.pipe(outputStream);
*/

// connecting my file's readable stream to my  transformable-modifiable middle stream  
//*& `getting in return the readable stream of the middleStream`.
let NewReadableStream = fileStream.pipe(middleStream); 

// connecting my readable string of middleStream to the writableStream of the outputStream of the process.stdout
NewReadableStream.pipe(outputStream);  

 