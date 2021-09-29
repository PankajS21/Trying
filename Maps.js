let myMap=new Map();
let key1="myStr", key2={}, key3=function(){};


// Setting map Values
myMap.set(key1,"this is a String");
myMap.set(key2,"This is an empty Object");
myMap.set(key3,"This is empty function");
// console.log(myMap);

// Getting the values from a map
let value1=myMap.get(key1);
// console.log(value1);
let value2=myMap.get(key2);
// console.log(value2);
let value3=myMap.get(key3);
// console.log(value3);

// Get the size of the map
// console.log(myMap.size);

// we can loop using for...of to get  keys and values
// for(let data of myMap){
// console.log(data);
// }

// Get only keys 
// for(keys of myMap.keys()){
//     console.log(keys);
// }

// Get only values
// for (values of myMap.values()){
//     console.log(values);
// }

// We can loop through a map using for each loop

// myMap.forEach(function(value,key){
//     console.log(key);
//     console.log(value);
// })

// Converting map into array
// let myArray=Array.from(myMap);
// console.log(myArray);
       
            //  OR,
// Array.from(myMap).forEach(function(data){
// console.log(data);
// })


// // Converting Map keys into array
// let mapKeys=Array.from(myMap.keys());
// console.log(mapKeys);

// // Converting Map values into array
// let mapValues=Array.from(myMap.values());
// console.log(mapValues);