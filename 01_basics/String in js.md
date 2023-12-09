1. `string.charAt(index);`->returns new string containing single character.

  

2. `string.concat(str1,str2,...);`-> returns new string of concatenation.

```

" ".concat("dsaf" , 2);

```

  

3. `string.includes(str,position);`-> `case sensitive` search on string | returns `boolean`.

  

```

"sdaf".include("a");

```

  

4. `string.indexOf(str,position);` -> returns the index of first occurrence of str only if index >= position , if not -> return`-1`.

  

`"hello world".indexOf("o" , 12); //o/p:12`

  

- `lastIndexOf`->`case-sensitive` search from last and return index from start which is <= than given number.

  

5. `padEnd(5,'.') & padStart(length,str)` -> concat str from end and start such that string's final length is `length`.

  

6. `string.repeat(count);`

  

7. `string.replace(pattern,replacement);`

  

```

" sdf sd ".replace(' ','_'); //o/p: sdf_sd_

```

  

8. `string.slice(indexStartEnclude , indexEndsExclude);`->extracts a section of this string and returns it as a new string.

  

*9. `string.split(separator , limit);`-> divides string into substrings by searching for separator-substring and /->`returns array`<-.

```

"abc".split(''); //o/p-> ['a','b','c']

```

  
  

10. `string.substring(startIndexEncluding , endIndexExcluding)`: Just like slice but different behaviour on `negative indices` & `reverse indexing`.

  

11. `toUpperCase & toLowerCase`

  

12. `toString`

  

13. `trim() , trimEnd() , trimStart()`;

  

*14. `parseInt(string)`-> converts string to number.

```

parseInt("43"); //->43

parseInt("43ac"); //-> 43

parseInt("ac43sdf"); //-> NaN

```

>`parseFlaot`