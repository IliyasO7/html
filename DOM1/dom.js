//Examine the document object

//console.dir(document);
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title = 123;

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);

console.log(document.forms[0]);
console.log(document.links);
*/

//console.log(document.images);

//selector for query the DOM
//GET ELEMENT BY ID

//console.log(document.getElementById("header-title"));
//var  headerTitle = document.getElementById('header-title');
var  header = document.getElementById('main-header');

//console.log(headerTitle);

header.style.borderBottom = 'solid 3px #000';

//get element my class name
//var additm = document.getElementsByClassName('');
/*
var items = document.getElementsByClassName('title');
console.log(items[0]);
items[0].style.fontWeight = 'bold';
items[0].style.color = 'green';
*/

/*

var items = document.getElementsByClassName('list-group-item');
console.log(items);
//console.log(items[2]);

items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';



var li = document.getElementsByTagName('li');
console.log(li);
//console.log(items[2]);
*/

/*
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'hello world';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";


var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'blue';

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = 'green';

var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color = 'white';
*/


var titles = document.querySelector('.title');
console.log(titles);

//canot be perfromed by querry all
/*
var odd = document.querySelectorAll('.list-group-item:nth-child(2)');
odd.style.color = 'green';
*/
/*
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = '#f4f4f4';

}*/
var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';

}