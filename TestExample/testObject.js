
let name="Mary";
let lname="Jane";

// const customer = {
//     name:"John",
//     lname:"Doe",
// }

// const customer = {
//     name:name,
//     lname:lname,
// }

// const customer = {name,lname};

const customer = {
    name,
    lname,
    showData(){
        console.log("ข้อมูลลูกค้า : "+name+" "+lname);
    }
}

customer.showData()