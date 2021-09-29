let reg=/pankaj/; //This is a Regular Expression Literal
reg=/pankaj/g; //g means global
reg=/pankaj/i; //i means case-Insensitive
reg=/pankaj/ig; //it means 2 parameters "g" & "i" in same
let str="paNkaj This side pAnkaj";

// 1. exec()=This function will return an array for match or, null for no match
let result=reg.exec(str);
// console.log(result);
// result=reg.exec(str);
// console.log(result);
// if(result=reg.exec(str)){
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);

// }

// 2. test() = Returns true or false

let result2=reg.test(str);
// console.log(result2);

// 3. match() = It will return an array of results or null
let result3=str.match(reg);
console.log(result3);

// 4. search() = Returns index of first match, else gives -1
let result4=str.search(reg);
console.log(result4);

// 5. replace() = Returns new replaced string with all the replacements. (if no flag is given, first match will be replaced)
let results5=str.replace(reg,"suraj");
console.log(results5);

