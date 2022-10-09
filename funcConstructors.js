/*function Student(firstName,lastName,rollNo,sex,dob,age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNo = rollNo;
    this.sex=sex;
    this.dob = new Date(dob);
    this.age = age;

    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }

}


const stud1 = new Student("iliyas","shaikh",07,"M","07-05-2000",22);
const stud2= new Student("kaustub","Doe",06,"M","08-05-1992",28);

Student.prototype.getFullName = function(stud2)
{
    if(stud1.age>stud2.age)
    {
        return `${stud1.firstName} ${stud1.lastName}`;
    }
    else
    {
        return `${stud2.firstName} ${stud2.lastName}`;
    }
    
    
}

console.log(stud1.getFullName(stud2));
console.log(stud2.getBirthYear());
*/
//ES6 making classes and methods
class Student{
    constructor(firstName,lastName,rollNo,dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNo = rollNo;
        this.dob = new Date(dob);

    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
    getBirthYear()
    {
        return this.dob.getFullYear();
    }
}

const stud1 = new Student("iliyas","shaikh",07,"07-05-2000");
const stud2 = new Student("Yash","prasad",06,"06-05-1992");

console.log(stud1.getBirthYear());

console.log(stud1.getFullName());
