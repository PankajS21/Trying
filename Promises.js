/* Promise :-Best video on promise
-resolve
-reject
-pending
*/

function func1() {
    return new Promise(function (resolve,reject) {
        setTimeout(function() {
            let error=true;
            if(error){
                console.log("Function: Your promise has been resolved");
                resolve("Promise fulfilled");
            }
            else{
                console.log("Function: Your function has been rejected");
                reject("Sorry not fulfilled");
            }
        }, 1000);
    })
}
func1().then(function(error){
    console.log("Harry: Thanks for resolving "+ error)
}).catch(function(error){
    console.log("Pankaj: Very bad bro. because "+ error)
})

// Using Promises instead of Callback function

// Pretend that this response is coming from the server
let students = [
    { name: "pankaj", subject: "javaScript" },
    { name: "suraj", subject: "python" }
]

function enrollStudent(student) {
    return new Promise(function(resolve,reject){
    setTimeout(function () {
        students.push(student);
        console.log("student have been enrolled");
        let error=false;
        if(!error){
            resolve()
        }
        else{
            reject();
        }
    }, 4000);
});
}
function getStudents() {
    setTimeout(function () {
        str = "";
        students.forEach(function (element) {
            str += `<li> ${element.name} = ${element.subject}</li>`
            let ss=document.getElementById("stList")
            ss.innerHTML=str;
            console.log("students have been fetched");
        })
    }, 2000);
}
let st={name:"rohan",language:"django"};
enrollStudent(st).then(function(){
    getStudents();
}).catch(function(){
    console.log("some error occured");
})
// console.log(students);
// console.log(getStudents())