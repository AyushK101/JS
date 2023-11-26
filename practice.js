let arr = [ 2 , 3 , 4 , 4];
let res = arr.filter( ( _ , index )=> {
    return index > 1;
});
console.log(res);


const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
