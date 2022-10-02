const person ={
    firstName:"john",
    lastName:"Doe",
    age : 30,
    hobbies:["Music","Movies","sports"],
    address:{
        street:"50 main St.",
        city:"Boston",
        state:"MA",
    }
};
/*
console.log("print the attribute: "+person.hobbies[1]);
console.log("print the attribute: "+person.address.state);


const {age, address: {state}} = person;
console.log(age, state);
*/

const todos=[
    {
        id:1,
        text:"Take out trash",
        isCompleted:true,
    },
    {
        id:2,
        text:"Meeting with boss",
        isCompleted:false,
    },
    {
        id:3,
        text:"Movies with friends",
        isCompleted:true,
    }
];

for(let i=0;i<todos.length;i++)
{
    console.log(todos[i].id);
}
