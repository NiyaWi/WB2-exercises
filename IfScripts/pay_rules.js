"user strict"


let payRate = 25 ;
let hoursWorked = 40 ;

let overtime = hoursWorked - 40;
let grossPay = (payRate * hoursWorked) + (overtime * 1.5 * payRate);


if (hoursWorked > 40)
{
grossPay * overtime ;
}
 else {
   overtime=0;
 }


 console.log("You worked" + " " +  + " " + " overtime hours");
console.log("Your gross pay is: $" + " " + grossPay);

