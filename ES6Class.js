class Employee{
    constructor(givenName,givenExperience,givenDivison){
        this.name=givenName;
        this.experience=givenExperience;
        this.divison=givenDivison;
    }
    slogan(){
        return `This company is the best. Regards, ${this.name}`
    }
    joiningYear(){
        return `Iam working here since ${2021-this.experience}`
    }
    static mul(a,b){
        return a*b;
    }
}
let about= new Employee("pankaj",20,"lays");
console.log(about);
// console.log(about.slogan());
// console.log(about.joiningYear());
// console.log(Employee.mul(4,5));


// Now inherit the above class in another class

class programmer extends Employee{
    constructor(givenName,givenExperience,givenDivison,givenLanguage,givenGithub){
        super(givenName,givenExperience,givenDivison)
        this.language=givenLanguage;
        this.github=givenGithub;
    }
    favoriteLanguage(){ 
        if(this.language=="C++"){
            return ("C++ is my favourite Language");
        }
        else{
            return ("JavaScript is my favourite Language");
        }
    }
    static sub(x,y){
        return x-y;
    }
}
let hisAbout=new programmer("suraj",10,"kurkure","javaScript","suraj141");
console.log(hisAbout);
console.log(hisAbout.favoriteLanguage());
console.log(hisAbout.slogan());
console.log(hisAbout.joiningYear());
console.log(programmer.mul(6,7));
console.log(programmer.sub(8,3));

