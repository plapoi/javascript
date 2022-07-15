getDataCustomer=(name,address="กรุงเทพมหานคร")=>{
        if(!address){
            // address= "กรุงเทพมหานคร"
        }
        const customer = `ชื่อลูกค้า : ${name} 
ที่อยู่ลูกค้า : ${address}`
        return customer;
}

console.log(getDataCustomer("แอรี่",));