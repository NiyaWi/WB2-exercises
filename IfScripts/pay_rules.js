"user strict"


let payRate = 12.5 ;
let hoursWorked = 20 ;

let overtime = hoursWorked - 40;
let grossPaywov = (payRate * 40) + (overtime * 1.5 * payRate);
let grossPay = (payRate * hoursWorked);


if (hoursWorked > 40){
  grossPaywov;

}

 else {
  grossPay ;
 }


 console.log("You worked" + " " + overtime + " " + " overtime hours");
console.log("Your gross pay is: $" + " " + grossPay);
console.log("Your gross pay is:$" + " " + grossPaywov);

