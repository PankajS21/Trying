// Object Literals for Creating Objects
let obj={
    name:"Alto 800",
    topSpeed:80,
    run: function(){
       console.log("Car is Running");
       return this.name;
    }
}
// console.log(obj.run());

// Creating a Constructor for Cars
function Car(givenName,givenSpeed) {
    this.name=givenName;
    this.speed=givenSpeed;
    this.run=function(){
        console.log(`${this.name} is Running`);
        console.log(`Its speed is ${this.speed}`);
        return "bhkkk";
    }
    this.analyze=function(){
        let a=`this car runs faster than BMW by ${200-this.speed} kmph`;
        return a;
}
}
let car1= new Car("Audi",180);
let car2= new Car("Bentley",190)
let car3= new Car("BBT",195)

console.log(car1.analyze(),car2,car3);
