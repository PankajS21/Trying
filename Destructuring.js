// let [a,b]=[40,39];
// console.log(a);
// console.log(b);

// let [a,b,c,d,...e]=[3,5,1,35,57,6,7,8,09,78]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)


// ({a,b,c,d,...e}={a:2,b:4,c:7,d:76,e:90,f:67,g:65})
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// Array Destructuring

// let marks=[23,67,89,63,98];
// [pankaj,suraj,rohit,...rohan]=marks
// console.log(pankaj);
// console.log(suraj);
// console.log(rohit);
// console.log(rohan);



// Object Destructuring

let Laptop={
    Brand:"Lenovo",
    Age:"40 days",
    net:54,
    start:function(){
        console.log("hello world")
    }
}
 let {Brand,Age,net,start}=Laptop;
 console.log(Brand);
 console.log(Age);
 console.log(net);
 console.log(start);
 console.log(start());
 start();
 