let reg=/\wankaj/;  //word charcter: _ or words or alphabets
reg=/\w+ankaj/;     //w+ means one or more than one word character
reg=/\Wankaj/;      // W means non word character
reg=/\W+ankaj/;     // W+ means one or more than one non-word character  
reg=/\dankaj/;      // d means digit
reg=/\d+ankaj/;     // d+ means more than 1 digit 
reg=/\Dankaj/;      // D means non-digit
reg=/\D+ankaj/;     //D+ means one or more than one non-digit
reg=/\sankaj/;      // s means whitespace character   
reg=/\s+ankaj/;     // s+ means one or more than one whitespace character
reg=/\Sankaj/;      // S means non-whitespace character
reg=/\S+ankaj/;     // S+ means one or more than one non-whitespace character
reg=/pankaj\b/;     // b means word boundary

//Assertions:
reg=/pan(?=k)/;   // it means k should present after "pan" 
reg=/pan(?!k)/;  // it means k should not be there after "pan"
reg=/pan(?!=k)/;  // ?!= it means k should either be present or nor. 
let str="panuyuykaj this side"
let result=reg.exec(str);
console.log(result);