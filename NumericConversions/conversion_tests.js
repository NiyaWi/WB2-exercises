"use strict";

// Description: This script tests various numeric conversion techniques.
// 
//Author: Niya Williams

var a = "101.1"; 
//parseInt(101) parseFloat(101.1) Number(101.1) +(101.1)
var b = "55 ";
//parseInt(55) parseFloat(55) Number(55) +(55)
var c = "402 Stevens";
//parseInt(402) parseFloat(402) Number(NaN)  +(NaN)
var d = "Number 5";
//parseInt(NaN) parseFloat(NaN) Number(NaN)  +(NaN)


a= +(a);
console.log(a)