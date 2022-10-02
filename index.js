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


/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.backgroundColor = '#ccc';
});
*/

