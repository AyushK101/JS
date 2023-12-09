1. `json`=> 
	1. `JSON.parse(string)`-> converts JSON object string into JSON object.
	```
		let str = '{ "name":"ayush" , "age":23 , "gender":"male" }'
		json.parse(str);
		//o/p: { "name":"ayush" , "age":23 , "gender":"male" }

	```
	2. `JSON.stringfy(js-value`-> converts a js value{like obj ,array} to json format.

2.`Object`=> think as a global class.
```

// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj); //array of keys
  console.log("After Object.keys():", keys);

  let values = Object.values(obj); // array of values
  console.log("After Object.values():", values);

  let entries = Object.entries(obj); // array of key-value pairs
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
```

