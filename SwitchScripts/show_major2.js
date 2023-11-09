"use script;"


//step 1:  establish my known values.

let student = "Betty";
let studentMajorCode = "HIS";

//step 2.1: establish my unknowns
let location;
let studentMajorName;

//step 2.2: calculate unknowns

switch (studentMajorCode) {
    case "ENG":
  console.log("Student Name:" + " " + student + " "  + "Major: English" + " " + "Location : Kerr Hall, Room 201")
break;
case "MKT": 
    console.log("Student Name:" + " " + student + " "  + "Marketing" + " " + "Location: Westyle Hall, Room 310")

case "BIOL" :
    ("Student Name:" + " " + student + " "  + "Major: Biology" + " " + "Location: Science Building , Room 310");
break;
case "CSCI":
   console.log("Student Name:" + " " + student + " "  + "Major: Computer Science" + " " + "Location: Sherppard Hall , Room 314")
   break;
 case "HIST":
    console.log("Student Name:" + " " + student + " "  + "Major: History" + " " + "Location: Kerr Hall, Room 114");
break;
default:
    console.log("ERROR!");

}

