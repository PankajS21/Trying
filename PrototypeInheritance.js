let proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        return this.name = newName;
    }
}

// This Creates object pankaj
// let pankaj=Object.create(proto);
// pankaj.name="harry";
// pankaj.role="programmer";
// pankaj.changeName("harry2");
// console.log(pankaj);

// Another way of creating object
// let pankaj = Object.create(proto, {
//     name: { value: "harry", writable: true },
//     role: { value: "programmer" }
// });
// pankaj.changeName("harry2");
// console.log(pankaj);


// Employee Constructor
function Employee(myName, mySalary, myExperience) {
    this.name = myName;
    this.salary = mySalary;
    this.experience = myExperience;
}

// slogan
Employee.prototype.slogan=function(){
    return `This is the best Company Regards, ${this.name}`;
}

// Create an Object from this Constructor now
// let pankaj=new Employee("harry",100,20)
// console.log(pankaj);
// console.log(pankaj.slogan());

// Programmer
function programmer(myName, mySalary, myExperience,myLanguage){
    Employee.call(this,myName,mySalary,myExperience);
    this.language=myLanguage;
}

// Inherit the Prototype
programmer.prototype=Object.create(Employee.prototype);

// Manually set the Constuctor
programmer.prototype.constructor=programmer;


let suraj1=new programmer("suraj",200000,2,"javascript")
console.log(suraj1);
console.log(suraj1.slogan());