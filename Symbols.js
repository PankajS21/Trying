// Symbols
let sym1= Symbol("hello Sym1");
let sym2= Symbol("hello Sym1");
// console.log(sym1);
// console.log(sym2);
// console.log(sym1===sym2);

// // Checking type of symbols
// console.log(typeof sym1);
// console.log(typeof sym2);

// let a=89;
// let b=89;
// console.log(a===b);
// console.log(null===null);
// console.log(undefined===undefined);

let k1=Symbol("id=k1");
let k2=Symbol("id=k2");
let myObj={};
console.log(myObj);
myObj[k1]="pankaj";
myObj[k2]="suraj";
myObj["no."]=90;
myObj["no.2"]=970;
myObj[40]="a number"

// console.log(myObj);
// console.log(myObj[k1]);
// console.log(myObj[k2]);
// console.log(myObj["no."]);
// console.log(myObj["no.2"]);

// console.log(myObj.k2);   //We cannot use this because it is same as myObj["k2"]


// Symbols are ignored in for-loop as well as while using JSON.stringify()
for(let data in myObj){
    console.log(myObj[data]);
}

console.log(JSON.stringify(myObj))