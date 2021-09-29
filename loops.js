// for(let i=0; i<25;i++)
// {
//     console.log(i);
// }
// let arr=[1,2,3,4,5];
// for(a=0;a<arr.length;a++){
//     let element=arr[a];
//     let array=arr;
//     console.log(element,[a],array);
// }

// arr.forEach(function(element,index,array){
//     console.log(element,index,array);
// });

// let j=0;
// while(j<20){
//     console.log(j);
//     j++;
//     if(j==5){
//         j++;
//         break;
//     }
// }

let k = 0;
do {
    console.log(k);
    k++;
    if(k==8){
        k++;
        continue;
    }
} while (k < 20);
console.log("done");

let obj={
name:"pankaj",age:19, contact:85880, "favourite colour":"black"
}
// console.log(obj);
for(let k in obj){
    console.log(`the ${k} of object is ${obj[k]}`);
}


console.log(obj["favourite colour"]);