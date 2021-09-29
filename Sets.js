let mySet= new Set();
console.log(mySet);

// Adding values to the set
mySet.add("this");
mySet.add("is");
mySet.add("the");
mySet.add("code");
mySet.add("for");
mySet.add("Sets");
mySet.add(true);
mySet.add(890);
console.log(mySet);

// Use a constructor to initialize the Set

// let mySet=new Set(["hello","boys",87,"my",false])
// console.log(mySet);

console.log(mySet.size);  //Get the size of the set

console.log(mySet.has(890));  //Check Whether set has 890 or not

// console.log("before deleting",mySet);
// mySet.delete("this");  //Remove an item from the set
// console.log("after deleting",mySet);

// Iterating a Set

// for (let key of mySet){
//     console.log(key);
// }

//         //   OR,

// mySet.forEach(function(data){
// console.log(data);
// })        


// Converting Set into Array

Array.from(mySet).forEach(function (element) {
    console.log(element);
})

let set=Array.from(mySet);
console.log(set);