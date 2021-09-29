// let fetchBtn = document.getElementById("fetchBtn");
//  fetchBtn.addEventListener("click", buttonClickHandler);
// function buttonClickHandler() {
//     console.log("you have clicked the Fetch button");

//     // Instantiate an Object
//     let xhr = new XMLHttpRequest();

//     // Open the Object
//     xhr.open("GET", "pankaj.txt", true);

//     // What to do on progress(Optional)
//     xhr.onprogress = function () {
//         console.log("Work at Progress");
//     }
//     // What to do when response is ready
//     xhr.onload=function(){
//         if(this.status==200){
//         console.log(this.responseText);
//         }
//         else{
//             console.error("Some Error Occured");
//         }
//     }

    // Old method of checking how many states has been done
//     xhr.onreadystatechange=function(){
//         console.log("ready state is:"+" "+this.readyState);
// }
//   // Send the request
// //     
//     xhr.send();
// }


// Now Discuss about Post Method
// let fetchBtn = document.getElementById("fetchBtn");
// fetchBtn.addEventListener("click", buttonClickHandler);
// function buttonClickHandler() {
// console.log("you have clicked the Fetch button");

//     // Instantiate an Object
//     let xhr = new XMLHttpRequest();

//     // Open the Object
//     xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
//     xhr.getResponseHeader("Content-type","application/json")

//     // What to do on progress(Optional)
//     // xhr.onprogress = function () {
//     //     console.log("Work at Progress");
//     // }
//     // What to do when response is ready
//     xhr.onload=function(){
//         // if(this.status==200){
//         console.log(this.responseText);
//         // }
//         // else{
//         //     console.error("Some Error Occured");
//         // }
//     }

//     // Old method of checking how many states has been done
//     // xhr.onreadystatechange=function(){
//     //     console.log("Ready state is :" +" "+ xhr.readyState);
//     // }

//     // Send the request
//     params=`{"name":"test12398","class":"22"}`;
//     xhr.send(params);
// }





// Now discuss how to print objects in DOM

// let popBtn = document.getElementById("popBtn");
// popBtn.addEventListener("click", buttonClickHandler);
// function buttonClickHandler() {
//     console.log("you have clicked the Fetch button");

//     // Instantiate an Object
//     let xhr = new XMLHttpRequest();

//     // Open the Object
//     xhr.open("GET", "http://dummy.restapiexample.com/api/v1/createjh", true);

//     // What to do on progress(Optional)
//     // xhr.onprogress = function () {
//     //     console.log("Work at Progress");
//     // }
//     // What to do when response is ready
//     xhr.onload = function () {
//         if (this.status == 200) {
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);
//             // let list = document.getElementById("list");
//             //  str="";
//             // for (key in obj) {
//             //     str += `<li> ${obj[key].employee_name} </li>`
//             // }
//             // list.innerHTML = str;
//         }
//         else {
//             console.error("Some Error Occured");
//         }
//     } 
//     // Send the request
//     xhr.send();
// }
