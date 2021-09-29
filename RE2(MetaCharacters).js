let reg=/pankaj/;

//Lets look into some metacharacter symbols
// reg=/^p/ig; // ^ means starts with
// reg=/side$/ig; // $ means ends with
// reg=/p.nkaj/; // . matches with any character
// reg=/pa+nkaj/i;  // + allows to add any no. of character after it.
// reg=/pa*nkaj/i;  // * allows to add 0 or more characters after it.
reg=/pankaj?h/i; //? means optional
reg=/pa\/nkaj/i;  // \ allows to add symbols as it is
let str="pa/nkaj this side";

let result=reg.exec(str);
console.log(result);

if(reg=reg.test(str)){
    console.log(`the string ${str} contains the string ${reg.source}`);
}
else{
    console.log("not matched")
}