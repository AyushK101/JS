# 1
- you can convert searching into a commonJS module by .cjs extension and in cjs module , module.exports will work.

# 2
-  you can specifically export an object by  `export` keyword.
- two types of export : default , named 
- statement : `import <default> , <named> from <file-location>;`

## Default Import:
- A default import allows you to import the default export from another module.
- Each module can have at most one default export.
>When you import the default export, you can give it any name you choose.
- Typically, you use the import statement without curly braces to import the default export.
- Example of exporting a default value:
```
// exportModule.mjs
export default 42;

// importModule.mjs
import myValue from './exportModule.mjs';
console.log(myValue); // 42
```

## named import:
- A named import allows you to import one or more specific exports (variables, functions, or classes) from another module.
- You enclose the exported names in curly braces {} and list the names you want to import.
- example of exporting named values:
```
// exportModule.mjs
export const var1 = 1;
export function func() { /* ... */ }


// importModule.mjs
import { var1, func } from './exportModule.mjs';
console.log(var1); // 1
func();

```