# ts maps
## Setup
- Parcel bundler
Install this package `npm i -g parcel-bundler`, this package is useful for starting new ts project, we will have an index.html and it’ll include a script tag using index.ts, parcel will see that it is a .ts file and parse it into js since that is what browsers understand. 

- Running your project, instead of doing npm start, with parcel you will write `parcel index.html` at the root dir of your project.

## Project summary
This project will feature: 
- User: randomly generated information 
- Company: randomly generated information
- Maps: the map will show a pointer of the info above.

## PreCode
There are three entities that it seems like we will have: User, Company and Map. This means that we want to create three different classes and we will import this into our index.ts file. 

A file whose primary purpose is to create and export a class will have its file name capitalized. 

## Using a JS library in a TS environment 
TS wants to know everything about your code, well the types. But when using a JS library, the library isn’t written in TS, it’s written in JS so it won’t be able to know all that it needs to know. 

### Fix 
TS fixes this issue by having type definition files, this is sort of like an adapter between our TS code and JS libraries, the type definition file will tell TS all the different functions that are available inside of the JS library, what sort of value that they take and return. Sometimes type definition files will be installed automatically (ie. axios). But other times we need to install it manually. 

You will know that you need to install the type definition file manually if you try to use a JS library and you see ‘Could not find a declaration file for module ‘module name’’. 

### To install manually 
1. Most of the popular packages that you want to use there is a type definition file already. 
2. We will need to reach into definitely typed naming scheme. You will install a package that generally looks like this: `@types/{library name}`, so for this project it’ll be @types/faker.
3. You will look on the npmjs.com and you will type in the `@types/{library name}`
4. In the package you may see something like ‘filed exported from blah blah blah/DefinitelyTyped/’, this is what you want. 
5. Install the package 

Type definition files will have the extension: `.d.ts`, after you have installed the TDF (type def file) you can go to your import statement, hold the CMD key and you can click on the name of your package, it’ll act as a hyperlink and it’ll open the corresponding TDF.