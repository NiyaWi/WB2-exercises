"use strict";
// let payRate = 50;
// let hoursWorked = 45;
// //unknown values 
// let overtime;
// let grossPay;
 if(hoursWorked <= 40){
grossPay = payRate*hoursWorked;
 }
// else {
// overtime = hoursWorked-40;
// grossPay = (payRate*40) + ((payRate*1.5) * overtime);
// }

// //display the result

 console.log(`pay rate: ${payRate} hours worked: ${hoursWorked} gross pay: ${grossPay}`);

let annualPay = grossPay*52;
let taxRate;
let filingStatus = "single";
// if(filingStatus == "single"){
//     if (annualPay < 12000){
//         taxRate = 0.05
//     }
//     else if(annualPay <=24999){
//         taxRate = 0.10
//     }
//     else if(annualPay <=74999)
// }


if (filingStatus == "joint"){
    if(annualPay < 12000){
        taxRate = 0.06
    }
}
console.log(`Annual Pay is ${annualPay} `);