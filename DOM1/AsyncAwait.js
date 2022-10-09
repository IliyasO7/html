/*
console.log('person1: shows ticket');
console.log('person2:shows ticket');

const promiseWifeBringingTicks = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('tikcet');

    },3000)

});

const getPopcorn = promiseWifeBringingTicks.then((t)=>
{
    console.log('Wife: i have the tickets');
    console.log('Husband: lets get in');
    console.log('Wife: no i am hungry');
    return new Promise((resolve,reject)=>
        resolve(`${t} popcorn`));
});

const getButter = promiseWifeBringingTicks.then((t)=>
{
    console.log('Husband: i got some popcorn');
    console.log('Husband: lets get in');
    console.log('Wife: no i need butter on pop');
    return new Promise((resolve,reject)=>
        resolve(`${t} butter`));
});

getButter.then((t)=> console.log(t));

console.log('person4:shows ticket');
console.log('perosn5:shows ticket');
*/

console.log('person1: shows ticket');
console.log('person2:shows ticket');

//const preMovie = async () => 'preMovie'; //async functions return promises always
/*
const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve,reject) =>{
        setTimeout(()=> resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));

    const addButter = new Promise((resolve, reject)=> resolve(`butter`));
    
    const getColdrinks = new Promise((resolve, reject)=> resolve(`coldrinks`));



    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have ${ticket}`);
    console.log('Husband: we should go in');
    console.log('Wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`Husband: i got some ${popcorn}`);
    console.log('Husband: lets get in');
    console.log('Wife: no i need butter on pop');

    let butter = await addButter;

    console.log(`Husband: i got some ${butter} on pop`);
    console.log(`husand: anything else??`);
    console.log(`wife: lets get in`);
    console.log(`yeah`);

    let coldrnks = await getColdrinks;

    console.log(`Husband got you the ${coldrnks}`);
 
    return ticket;
}*/


const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve,reject) =>{
        setTimeout(()=> resolve('ticket'),3000);
    });

    let ticket;
    try{
        ticket = await promiseWifeBringingTicks;
    }
    catch(e)
    {
        ticket = 'sad face';
    }

   
 
    return ticket;
}

preMovie().then((m)=>console.log(`person3: shows ${m}`));


console.log('person4:shows ticket');
console.log('perosn5:shows ticket');