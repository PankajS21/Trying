// async function harry(){
//         return "pankaj";
// }
// console.log(harry());


// async function harry(){
//     let response=await fetch("pankaj.txt");
//     let users=await response.text();
//     return users;
// }
// console.log(harry());
// harry().then(function(data){
// console.log(data);
// })


async function harry(){
    console.log("inside function harry")
        let response=await fetch("pankaj.txt");
        console.log("before harry")
        let users=await response.text();
        console.log("users resolved")

        return users;
    }
    console.log("before calling harry");
    console.log(harry());
    console.log("after calling harry");
    harry().then(function(data){
        console.log(data);
    })
    console.log("last line of code");

    