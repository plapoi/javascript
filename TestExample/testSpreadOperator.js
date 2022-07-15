const arr = [100,200,300];
const arr2 = [1,2,3,arr]; // not spread array
const arr3 = [1,2,3,...arr];

console.log(arr2);
console.log(arr3);
arr2.push(...arr); 
console.log(arr2);