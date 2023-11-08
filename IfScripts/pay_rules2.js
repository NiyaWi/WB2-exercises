"use strict";
//known values

let payRate = 17.3;
let hoursWorked = 45;

//unknown values 
let overtime;
let grossPay;
if(hoursWorked <= 40){
grossPay = payRate*hoursWorked;
}
else {
overtime = hoursWorked-40;
grossPay = (payRate*40) + ((payRate*1.5) * overtime);
console.log(overtime)
console.log(payRate*40)
console.log(((payRate*1.5) * overtime))
}

//display the result

console.log(`pay rate: ${payRate} hours worked: ${hoursWorked} gross pay: ${grossPay}`);
