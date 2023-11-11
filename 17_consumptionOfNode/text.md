- `npm init` initialize a basic node project.
- In that project , you have a `package.json` file. In package.json file you have some `meta data` about the project.

- package.json file creates a `node_modules` folder which contains all the dependencies involved in the package.

- it is also going to crate a `package-lock.json` file. It contains info about all dependencies that come with package.

- `node_modules` become very heavy , so we don't push it on github , we ignore it .
- to install node_modules when someone forks on local machine , run `npm i` in the project directory.
 