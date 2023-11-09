"use script;"


//step 1:  establish my known values.

let student = "Betty";
let studentMajorCode = "HIST";

//step 2.1: establish my unknowns
let location;
let studentMajorName;

//step 2.2: calculate unknowns

if (studentMajorCode == "ENG") {
    studentMajorName = "English"
    location = "Kerr Hall, Room 201"
}
else if (studentMajorCode == "MKT") {
    studentMajorName = "Marketing"
    location = "Westyle Hall, Room 310"
}
else if (studentMajorCode == "BIOL") {
    studentMajorName = "Biology"
    location = "Science Building , Room 310"
}
else if (studentMajorCode == "CSCI") {
    studentMajorName = "Computer Science"
    loaction = "Sherppard Hall , Room 314"
}
else if (studentMajorCode == "HIST") {
    studentMajorName = "History" 
    location = "Kerr Hall, Room 114"
}
else{
    studentMajorName = "ERROR!";
    location = "ERROR!";
}

//step 3: display the results

console.log("Student Name:" + " " + student)
console.log("Major:" + " " + studentMajorName)
console.log("Location:" + " " + location)



//********************************* */

//Step 1:
// establish known values.

//Step 2:
// figure out unknown values through calculation (in this case, lookup)

//Step 3: 
// display the result.

