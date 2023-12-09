```
let fruit=["apple","mango","orange"];
1.EMPTY ELEMENTS: fruit[5]="kiwi" // fruit=['apple','mango',,,'kiwi'];

2. INCRESING LENGTH: create empty element
fruit.length=8; // fruit=['apple','mango','orange',,,,,]

3. DECREASING : delete element
fruit.lenghth=2; //fruit=['apple','mango'];

4. OUT-OF-BOUND ACCESSING: 
furit[33]; -> undefined

5. STRING INDEX: 
fruit['2']; -> orange // js interanlly converts to number 

```

1. `array.at(-ve/+ve index)`-> returns item at that index.
```
Array.protoype.at(arrayLike , 2); // calling at on non-array objects.
```

2. `array.concat(val1, val2, val3 ....)`-> returns new array 
```
Array.prototype.concat.call(array-like); 
```

> `spread operator`-> `...` expands iterable like array , string to be spreaded into single elements.
> ex: `...[3,4,5,"s","fd"]` -> `3 4 5 s fd` 


*`array.find()



3.  `array.fill(value,startIndexIcluded,endIndexExcluded);`-> return `modidied array` 

```
[2,3,4,4,5].fill(0,1,3); //o/p: [2,0,0,4,5]
```


*4. `array.filter(callbck(element,index,array));` ->`A iterative method` which `returns an array` containing elements that `pass the test` when each element upon callback.
- we have to return the (modified)element to include in `returned array`.

```
[2,2323,2323,2322,23].filter( word=>{
	if( word>2000) {
		return word/2000;
	}
})
```

*5. `array.forEach(callback(element,index,array)))`->` iterate` over elements in an array. | `returns undefined`

```
[1,2,3].forEach(word=> {
	word+=4;
		
} )
```

6. `array.includes(searchElement,fromIndex)`-> return `true/false` if value is present or not in the given array. 

```
[2,3,"sdf",["dssfd"]].includesz(2,3); //o/p: false
```

7. `array.indexOf(searchElement,formIndex)` -> `returns` index of first occurrence of `seachElement` , if not found-> `return -1`.

> `array.lastIndexOf(searchElement,fromIndex);` -> returns index of last occurrence of `serachElement`, if not found -> `return -1`.

```
[2,3,4,"ds"].indexOf(3,-2);
```


*8. `array.join(sepreator);` -> create& `return a new string` concatenating all elements by `comma` or by `sepreator`.

```
["d","v","a"].join(''); //o/p: dva
```

9. `array.keys();` -> `returns object` containing keys for each index.

*10.`array.map(callbck(element,index,array));` -> `returns array` containing the results of callback. 

```
[2,3,4,1].map(x=>{
	if(x>2) return x;
}) 
//o/p: [3,4]
```

11.  `array.pop()` -> `remove` & `return` last element of array. Changes the array.

```
	 [1,353,"dfs"].pop(); //o/p: dfs
```

12. `array.push(val1,val2,....);` -> add values to the end of array.

```
[23,4,24].push(2,{dsfs},[sdf]); //o/p: [23,4,24,2,{dsfs},[sdf]]
```

*13. `array.reduce(callback(accumulator , currentElement , index))` -> 
your defined callback ,we have to takes operated element/otherValue -> add it to the accumulator and return the accumulator.
> `array.reduceRight()`

```
[1,2,3].reduce((sum,x)=> {
	sum +=x;
	return sum;
})
```

14. `array.reverse()` -> reverse elements in   a string =>
```
[1,2,3].reverse(); -> [3,2,1]
```

15. `array.shift()` -> `removes and return` the first element of array.
```
[1,3,4].shift(); // o/p: 1  // & array become [3,4]
```

16. `array.unshift(element)`-> add given element in the beginning of the array.
```
[1,2,3].unshift("0"); //o/p: ["0",1,2,3]
```

17. `array.slice(startIndexIclude,endIndexExclude);` -> `returns a array` which is the sub-array of given array } | don't modify existing array.
```
[13,31,41].slice(0,2); //o/p: [13,31]
```

18. `array.sort();` -> sort the array | `can provide user defined sorting function`.
```
[1,5,4,6,3].sort(); //o/p: [1,3,4,5,6]
```

19. `array.splice(startIndex , deleteCount , item1,item2,item3....);` -> change content of array by removing , replacing , adding elements in array. 
``` 
	start: index to start changing
	deleteCount: no. of elements to remove from start.
	item1,item2,... : items to add after removing from start.
	
[1,2,3,4,5].splice(1,2,"a","b","c"); //o/p: [1,"a","b","c",4,5]
```


20. `array.values();` -> `returns object` that contains values of array.

