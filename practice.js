const MyObject = {
    createDiv: function() {
      this.newDiv = document.createElement("div");
      this.newDiv.textContent = "This div is created inside an object!";
      // Manipulate or style the element further if needed
    },
    appendToBody: function() {
      document.body.appendChild(this.newDiv); // Append the created element to the body
    }
  };
  
  MyObject.createDiv(); // Create the div
  MyObject.appendToBody(); // Append it to the body
  
  let body = document.querySelector("body");


console.dir(body.childNodes);

