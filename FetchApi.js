// let myBtn=document.getElementById("myBtn");
// myBtn.addEventListener("click",function(){});

// function getData(){
//     console.log("Started getData");
//     url="pankaj.txt";
//     fetch(url).then(function(response){
//         console.log("Inside First Then");
//         return response.text();
//     }).then(function(response){
//         console.log("Inside Second then");
//         console.log(response);
//     })
// }
// console.log("Before running getData");
// getData();
// console.log("After running getData");


// function getData(){
//     console.log("Started getData");
//     url="https://api.github.com/users";
//     fetch(url).then(function(response){
//         console.log("Inside First Then");
//         return response.json();
//     }).then(function(response){
//         console.log("Inside Second then");
//         console.log(response);
//     })
// }
// console.log("Before running getData");
// getData();
// console.log("After running getData");


// Fetch API for "post" method
// function getData() {
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data= {"name":"test123","salary":"123","age":"23"}
//     params={
//         method:"post",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(data)
//     }
//     fetch(url,params).then(function (response) {
//         return response.json();
//     }).then(function (response) {
//         console.log(response);
//     })
// }
// getData();
