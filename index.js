/*const btn = document.querySelector(".btn");
const nameInput= document.querySelector("#fName")
btn.addEventListener("click",(e)=>
{
    e.preventDefault();
    console.log("click");
    console.log(nameInput.value);

});
*/

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#fName');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value ==='' || emailInput.value ==='')
    {
        alert('please enter field');
        return;

    }

    console.log(nameInput.value);
    localStorage.setItem('name',nameInput.value);
    console.log(emailInput.value);
    localStorage.setItem('emailId',emailInput.value);


}

*/
/*
const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#fName');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value ==='' || emailInput.value ==='')
    {
        alert('please enter field');
        return;

    }

   let myObj = {
      name : nameInput.value,
      emailid : emailInput.value
    };

    let myObj_serialized = JSON.stringify(myObj);

    localStorage.setItem('myObj',myObj_serialized);
    
}
*/





/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.backgroundColor = '#ccc';
});
*/


const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#fName');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');



myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

   if(nameInput.value ==='' || emailInput.value ==='')
    {
        alert('please enter field');
        return;

    }
   

    
   let myObj = {
      name: nameInput.value,
      email: emailInput.value
    };

    //let myObj_serialized = JSON.stringify(myObj);
   
    localStorage.setItem(myObj.email,JSON.stringify(myObj));
    showNoOfUsers(myObj);

    
    



    


   
}
function showNoOfUsers(myObj)
    {
        
        //const keyArr = Object.keys(myObj);
        showNewUSerOnScreen(myObj)
        
/*
        keyArr.forEach(key =>
            {
                console.log(myObj[key]);
            });*/

        
        
    }

    function showNewUSerOnScreen(myObj){
        
            console.log(localStorage.getItem(myObj.email));
        

    } 
   /* function deleteUser(emailInput){
        console.log(emailInput);
        localStorage.removeItem(emailInput);
        
    }
    */


   



