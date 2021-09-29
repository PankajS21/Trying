let a=document.getElementById("cl1");
// a=a.className;
// a=a.childNodes;
// a=a.parentNode;
// a.style.color="red";
// a.innerText="Hello Brother";
// a.innerHTML="Hel<sup>2</sup>lo Brotherttt"

// console.log(a);

let b=document.querySelector("#cl2");
// b=document.querySelector(".box")
b.style.color="yellow";
// console.log(b);

// // MultiSelectors
let c=document.getElementsByClassName('box');
// c=document.getElementsByClassName("power");
// // c=document.getElementsByTagName("div")
// // console.log(c);
Array.from(c).forEach(function(element,index){
    console.log(element);
    // element.style.color="pink";
    console.log(c[1]);
})
