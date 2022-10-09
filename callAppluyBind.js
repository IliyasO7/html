const Students = {
    num:2
};

const Students1 = {
    num:7
};

var addToThis = function(a,b,c)
{
    return this.num + a + b +c;
};

console.log(addToThis.call(Students,2,5,3));

var arr = [1,2,3];
console.log(addToThis.apply(Students1,arr));

const bd = addToThis.bind(Students);
console.log(bd(2,2,2)); 

const Stud = {
    age:22
};

 var printAge = function()
{
    return this.age;
};

const methBnd = printAge.bind(Stud);
console.log(methBnd());