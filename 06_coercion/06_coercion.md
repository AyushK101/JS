# coercion : type-interconversion
- every lang has got some mechanism for type interconversion.
- ex: in java if we do something like `system.out.print("hello"+"22");`  => the code will print "hello22" 
i.e. it did convert 22 from number to string and then did concatenation.

## type interconversion 
- two types : 
1. implicit : automatically by language 
2. explicit : manually command to convert types.

- similarly this concept exist in JS also. 
- different languages have different philosophy like python prefers explicit but java do implicit .
- for JS things are a bit more tricky , as JS  _handles a wide variety of cases_.
- as a JS developer , you should know JS well , not its framework.

## abstract operations 
- these are functions/operations which are not available for end users to use. 
- but JS internally uses it and these are mentioned in the official docs to aid the documentation.
- few of abstract operations that we are going to focus are : ToPrimitive , ToString , ToNumber , ToBoolean.
- we cannot directly call them but few JS operations like subtraction , addition etc internally calls them and hence we can mimic them using these operations.

### ToNumber 
- we can use "-" operator to mimic ToNumber.
- 2 and 4 : take the values from right and left.
- 5 and 6: whatever you have in lnum(a) and lrum(b), convert that to number using ToNumber abstract operation.`lnum = ToNumber(a);` and `rnum = ToNumber(b);` and `return = lnum - rnum`
- rules of ToNumber
- undefined => NaN 
- boolean => true=>1 and false => +0.
- string => if by itrating over the string , you only gets valid digits , JS will do same but if other chars like $ , JS won't convert to number .
- symbol => Error 
- object => 

### ToString 
- we can use "+" operator to mimic ToString.
- The addition operator either performs string concatenation or numeric addition.
- get ` lval ` and `rval ` and perform `ToPrimitive()` on `lval`and on `rval`.
- check : if anyone of them is string , convert both of them to string and do string concatenation/
- otherwise convert them to number , and add them .

### ToPrimitive
- takes an `input` argument and try to converts it into a non-object type(primitive)
- if can't convert , it can throw error.
- it takes one more optional parameter, `PreferredType` .
- if we have more than one values that can become an answer , this optional argument helps us.
- check: 1. if input is an ECMAScript lang value. 
2. if type(input) object , then  
2.1 if PreferredType is not given , hint="default" (hint : new variable )  
2.2 else-if preferredType is string , hint="string"  
2.3 else preferredType is number , hint="number"  
2.4 if hint is "default" , then hint="number"  
2.5 calls ordinaryToPrimitive(input, hint)  
2.6 if hint : string  => [ tostring() , valueof() ]  : if tostring() returns object move to valueof()  
2.7 if hint : number  => [ valueof()  t,ostring() ]  : if valueof() returns object move to tostrng()  
2.8 value of toString() are not abstract operations . that means we can call them.  
*2.9 by default toString() on a object returns `'[object object]'`  
*3.0 by default valueOf() on an object returns same object 
3.1 for array : valueOf() => same array and toString() => print array without brackets.  

### ToBoolean
- the ToBoolean abstract operation converts the given type to a boolean values. ToBoolean works a bit differently when compared to toString or ToNumber.
- it maintains a list of values which when received as an argument returns `False`. And every thing aparts from the list of values returns `True`.
- therefore , it  maintains a list of false values .
- https://262.ecma-international.org/10.0/#sec-toboolean
- `null , undefined , +0 , -0 , NaN , "" , false` : if any of these in argument we return `false`, else we return `true`.
- we can use logical NOT operator(!) to mimic ToBoolean .
- !a => old value = ToBoolean(a) 
- if(old value is true ) : returns `false` ; else returns `true`.
