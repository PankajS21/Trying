console.log("This is Drag & Drop Tutorial");

let imgBox=document.querySelector(".imgBox");
let whiteBoxes=document.getElementsByClassName("whiteBox")

// Event-Listeners for draggable element imgBox
imgBox.addEventListener("dragstart",function(e){
   console.log("Dragstart has been trigerred")
});
imgBox.addEventListener("dragend",function(e){
    console.log("Dragend has been Triggered")
})