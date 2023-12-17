"user script"

//known info
let tilesPerBox= 12
let lengthOfRoom = 15;
let widthOfRoom = 11;

//unkown info

let room = tilesPerBox*.10*lengthOfRoom*widthOfRoom;
let result = room/12


//results
console.log(Math.round(result));