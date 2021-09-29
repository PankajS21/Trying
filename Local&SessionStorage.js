let arr=["pankaj","suraj","harry"];
// localStorage.setItem("name","pankaj");
// localStorage.setItem("age",19);
localStorage.setItem("fruits",JSON.stringify(arr))
// let a=localStorage.getItem("name");
// console.log(a);
// let b=localStorage.getItem("age");
// console.log(b);
let c=localStorage.getItem("fruits");
c=JSON.parse(localStorage.getItem("fruits")
);
console.log(c);
// localStorage.clear();
// // localStorage.removeItem("fruits")

// sessionStorage.setItem("name","suraj");