// console.assert(15>15,"what?");
// console.alert('bgjhgfuh');
// let a="orange";
// let b="pankaj";
// let c="mango";
// let d=`hello ${b}. Do you also likes ${a}  
// & ${c}`;
// document.body.innerHTML=d;
// let a=new Array([1,2,3,4,5]);
// let a=[1,2,3,4,5,6];
// a[0]=99;
// a.splice(2,2);
// let b=[8,9,10];
// console.log(a.concat(b));
// let a = 20;
// let b=30;
// console.log(a==200 || b==300? "sahi h chal":"nikal chal bro");
// let a = 20;
// switch (a) {
//     case 20:
//         console.log('ye nhi h bro');
        
//     case 12:
//         console.log("ye bhi nhi h bro");
        
//     case 0:
//         console.log("yhi to h bro");
        
//     default:
//         console.log("nikl bro");
//         break;
// }
// for(i=0;i<=10;i++){
//     console.log(i);
// }
// 

// let a=10;
// while(a<=9){
//     console.log(a);
//     a++;
// }

// let a=0;
// do{
//     console.log(a);
//     a++;
//     if(a==4){
//         a++;
//         continue;
//     }
// }while(a<=10)

// let obj={
//     name:"pankaj",age:19,
//     "fav. color":"black"
// }
// for(let key in obj){
//     console.log(obj[key]);
// }

// function greet(bhaikanaam="bsdk",kyahbe="gaand") {
//     let a=`hello bhai ${bhaikanaam} teri ${kyahbe} faad dunga`
//     return a;
// }
// let b=greet();
// console.log(b);


// let obj={
//     name:"suraj",age:15,standard:function () {
//         return "11th";
//     }
// }
// // 


// console.log(a);
// let a=document.images;
// Array.from(a).forEach(function(element,index){
//     console.log(element,index);
// })
// console.log(a);

let a=document.links;
let b="oog";
Array.from(a).forEach(function(element){
    // console.log(element);
    if(element.href.includes(b)){

        console.log(element.href)
    }
   else{
        console.log("only these includes oo there ");
    } 
})