summation=(x,y,z)=>x+y+z;

console.log(summation(1,2)); // error 

summation =(... numberArr)=>{
    let total = 0;
    for(let  number of numberArr) total+=number;
    return total;
};

console.log(summation(1,2,3,4)); // pass 
console.log(summation(1,2,3,4,5)); // pass 
console.log(summation(1,2,3,4,800,100)); // pass 
console.log(summation(1,2,3,4,-100)); // pass 

