- `npm init` initialize a basic node project.
- In that project , you have a `package.json` file. In package.json file you have some `meta data` about the project.  
It is going to list, download ,  all third party packages that you are going to install and use.

- it is also going to crate a `package-lock.json` file. It contains all other dependencies on which the main package is dependent on.

- package.json file creates a `node_modules` folder which contains all the dependencies involved in the package.

- `node_modules` become very heavy , so we don't push it on github , we ignore it .
- to install node_modules when someone forks on local machine , run `npm i` in the project directory. 

# streams -
- node internally provide a package called `stream`
