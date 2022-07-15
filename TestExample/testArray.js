// const data = [100,200,300];
// console.log(data);
// console.log(data.join());//convert to string
// console.log(data.join("*"));
// console.log("------------------------")

// const ref1 = [100,200,300];
// const ref2 = [400,500];
// const result = ref1.concat(ref2);
// console.log(result);
// console.log(result.join())
// console.log("------------------------")

// //push ,pop, shift, unshift
// const arr = [100,200,300]
// arr.push(400);
// arr.push(...[500,600,700]);
// arr.push(800,900);
// console.log(arr);
// console.log("------------------------")

// arr.pop();
// console.log(arr);
// console.log("------------------------")

// arr.shift();
// console.log(arr);
// console.log("------------------------")

// arr.unshift(999);
// console.log(arr);
// console.log("------------------------")

// //splice and slice
// const arr2 = [10,20,30,40]
// arr2.splice(1,2,99); // ลบ index ที่ 1 และนับไปอีก 2 ตัว และแทรก 99 ลงไปในที่ๆลบ(optional)
// console.log(arr2)
// console.log(arr2.slice(1,3)); //เอาตั้งแต่ index ที่ 1 ถึงก่อน 3 มา
// console.log("------------------------")

// //for each // for of
// const arr3 = [10,20,30,40];
// arr3.forEach(element => { // ใน for each ใช้ break continue บ่ได้
//     console.log(element);
// });
// for(e of arr3){// เขียน break continue ได้
//     if(e > 30) break;
//     console.log(e);
// }
// console.log("------------------------")

// //find in array
// const arr4 = [`แดง`,`เขียว`,`น้ำเงิน`,`ม่วง`,`ขาว`]
// console.log(arr4.indexOf("เขียว"));
// console.log(arr4.findIndex(element=>element==="เขียว"));
// console.log(arr4.find(element=>element==="เขียว"));
// console.log(arr4.find(element=>element==="เหลือง"));
// console.log("------------------------")

//array map
const arr5 = [10,20,30,40];
const result1 = arr5.map(e=>{
    return e*2;
});
const result2 = arr5.map(e=>e*2);
console.log(result1);
console.log(result2);

const arr6 = [`rainy`,`sunny`,`storm`,`dusty`,'fog'];
const result3 = arr6.map((e,i)=>{
    return i+` ${e}`;
});
console.log(result3);

const arr7 = [{day:`rainy`,temp:17},{day:`storm`,temp:32}];
console.log(arr7);
const result4 = arr7.map(e=>{
    return e.temp;
});
console.log(result4);