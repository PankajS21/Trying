// Pretend that this response is coming from the server
let students = [
    { name: "pankaj", subject: "javaScript" },
    { name: "suraj", subject: "python" }
]

function enrollStudent(student,getStudents) {
    setTimeout(function () {
        students.push(student);
        console.log("student have been enrolled");
        getStudents();
    }, 4000);
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
    }, 8000);
}
let st = new enrollStudent({ name: "rohan", subject: "django" },getStudents);
console.log(students);
console.log(getStudents())