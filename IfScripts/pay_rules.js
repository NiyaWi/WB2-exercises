"user strict"


let payRate = 17.3 ;
let hoursWorked = 45 ;

let overtime = hoursWorked - 40;
let grossPaywov = (payRate * 40) + (overtime * 1.5 * payRate);
let grossPay = (payRate * hoursWorked);


if (hoursWorked > 40){
  grossPaywov;

}

 else {

 }


 console.log("You worked" + " " + overtime + " " + " overtime hours");
console.log("Your gross pay is: $" + " " + grossPay);
console.log("Your gross pay with overtime is:$" + " " + grossPaywov);

