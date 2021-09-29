// let obj={
//     name:"pankaj",
//     age:20,
//     course:"b.tech"
// }
// console.log(obj);
function Obj(givenName,givenAge) {
    this.name=givenName;
    this.age=givenAge;
}
Obj.prototype.setName=function(newName){
    this.name=newName;
}
Obj.prototype.getName=function() {
    return this.name;
}   
let features=new Obj("pankaj");
console.log(features);
console.log(features.age);
console.log(features.getName())
let features= new Obj("pankaj");