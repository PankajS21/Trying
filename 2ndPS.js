// Create a new Element
let divElem=document.createElement("div");
// Add Text to created node
let val=localStorage.getItem("text");
let text;
if(val==0){
text=document.createTextNode("This is my element. Click Here to edit it");
}
else{
    text=document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id ,class and style
divElem.setAttribute("id","elem");
divElem.setAttribute("class","elem");
divElem.setAttribute("style","border:2px solid black; width:150px; margin:35px; padding:23px");

// Grab the Main Container
let box=document.querySelector(".box");
let box4=document.getElementById("box4");

// Insert the element with id box4
box.insertBefore(divElem,box4);
// console.log(divElem, box4,box);

// Add Evnt listener to divElem
divElem.addEventListener("click",function(){
    let noTxtArea=document.getElementsByClassName("textarea").length;
    if(noTxtArea == 0){
    let html=divElem.innerHTML;
    divElem.innerHTML=`<textarea class="textarea" id="textarea"> ${html}</textarea>`;
    }

    // Listen for the blur event on textarea
    let textarea=document.getElementById("textarea");
    textarea.addEventListener("blur",function() {
        divElem.innerHTML=textarea.value;
        localStorage.setItem("text",textarea.value)
    })
});