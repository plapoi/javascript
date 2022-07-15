const arr = ["red","green"];

// const [a,b] = arr;
const [,b] = arr;
// console.log(a);
console.log(b);

const product = {
    productName : "คอมพิวเตอร์",
    price : 200,
    stock : 10,
}
console.log(product.stock)

const {productName,price,stock} = product;
console.log(stock);

const {productName:p,price:pr,stock:s} = product;
console.log(s);