let age = 19;
if (age == 19) {
    console.log("age is 19");
}
else {
    console.log("age is not 19");
}

if (age === 19) {
    console.log("age is 19");
}
else {
    console.log("age is not 19");
}


if (age == 19) {
    console.log("age is 19");
}
else if (age == 119) {
    console.log("age is not 19");
}
else {
    console.log("age is unknown");
}

let vari = 99;
if (vari) {
    console.log("vari is defined");
}
else {
    console.log("vari is not defined")
}

if (typeof vari != "undefined") {
    console.log("vari has value");
}
else {
    console.log("vari has no value");
}


let doesDrive = true;
// if(doesDrive || age==189){
//     console.log("you can drive");
// }
// else{
//     console.log("you cannot drive")
// }
console.log(doesDrive && age == 19 ? "you can drive" : "you cannot drive");


switch (doesDrive) {
    case false:
        console.log("age is 179");
        break;
    case true:
        console.log("age is 19");
        break;
    case false:
        console.log("age is 38");
        break;
    default :
        console.log("age is not known");
        break;
}