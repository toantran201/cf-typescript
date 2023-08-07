# What is TypeScript
- Free and open source, developed and strongly supported by Microsoft
- Based on ecmascript 4 + ecmascript 6
- Author:  Ander Hejlsberg - Father of C#
- A syntactic superset of JavaScript - adds additional syntax to JavaScript to support a tighter integration with your editor.

# Why TypeScript
- Improved Maintainability: Leave more of our idea on “the lines of code”
- Type Safety: It has the potential to move some kinds of errors from runtime to compile time
- Better Tooling: It serves as the foundation for a great code developer's experience


# Hello world TS Program
## 3 main files
- package.json   # Package manifest
- tsconfig.json  # TypeScript compiler settings
- src/index.ts

## Compiler
- TS program with the tsc compiler
- The way compiler work depending on JS language level and module type

### Notes specific case related to version and module type
`Use of a built in Promise constructor (introduced in ES2015)`

`Use of async and await (introduced in ES2017)`

`Using export function`

#### `module` in `tsconfig.json` vs `type: "module"` in `package.json`
`module` in `tsconfig.json`
- Specifies the module code generation for TypeScript.
- It determines how TypeScript will generate module code in the emitted JavaScript files.
- This setting affects how your TypeScript code is transformed into JavaScript modules when you compile your TypeScript codebase.

`type` with a value of `module` in `package.json`:
- Specifies the module system used in your project.
- Allows to use `import` and `export` statements to organize and share code.
- The way  how your JavaScript files interact with other modules and how they are resolved by Node.js.

#### Way to think about TS files
- `.ts` files contain both type information and code that runs
- `.js` files contain only code that runs
- `.d.ts` files contain only type information