let people=["pankaj","suraj","rohan","nitin","om"];
// console.log(people);

// Traditional For loop

// for(i=0;i<people.length;i++){
//     let name=people[i];
//     console.log(name);
// }

// 1. Iterating an object

let obj={
    name:"pankaj",
    language:"javascript",
    hobbies:"Web Development"
}

// 1.1 Iterating an object using Traditional for loop

for(let i=0; i<Object.keys(obj).length; i++){
    let name= obj[Object.keys(obj)[i]];
    console.log(name);
}

// 1.2 Iterating an object using for-in loop

for (key in obj){
    console.log(obj[key]);
}

for (let key in obj){
    // console.log(key);
}

// 2. Iterating a string using for-in loop

// let str="My name is Pankaj";
// for(string in str){
//     console.log(str[string]);
// }

// Quiz:- Use Traditional for loop to iterate through the sane string

console.log("******For-of loop******");

people=["pankaj","suraj","rohan","nitin","om","saurabh"];
for(name in people){
   console.log(name);
}

str="My name is Pankaj";
for(let name of str){
    console.log(name);
}

