let reg=/p[a-z]nkaj/;  //can be character from a to z.
reg =/p[ahg]nkaj/;     //can be a,h or,g
reg =/p[^ahg]nkaj/;    // cannot be a,h or,g
reg =/p[Ahg]nka[uioj]/i;  // cannot be a,h or,g + can be u,i,o,j
reg =/p[a-zA-Z]nka[j6-9]/;  //we can have as many character sets as we want.


//Quantifiers: We use {}
reg=/pa{2}nkaj/;  // a should occur exactly 2 times
reg=/pa{0,2}nkaj/;  // a may occur 0,1 or 2 times.

//Grouping: We use paranthesis for grouping,()
reg=/pa(nk){2}aj/;  //nk should occur exactly 2 times
reg=/pa(n){2}k((aj)[0-5]){2}/;
let str="my name is pannkaj3aj4";  

let result=reg.exec(str);
console.log(result);