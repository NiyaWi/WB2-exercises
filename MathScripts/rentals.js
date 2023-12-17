"use strict";

//known values
var vanSeating = 15;
let PerVanCost = 250;


//unkown values


let pplOnTourPrice = 38/vanSeating*PerVanCost

//results
let resultPerPerson = pplOnTourPrice;



//question:how much is it to rent van? 
//how much to split cost between each person?

console.log(Math.round(resultPerPerson));
//per person 

var vanSeating = 38;
let perPersonResult = PerVanCost/vanSeating;
console.log(Math.round(perPersonResult));