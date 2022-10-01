//Examine the document object
//git remote add origin https://github.com/7083375809/html.git
//git push -u origin main


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
/*
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

*/

//tranversing dom
 var itemlist = document.querySelector('#items');

 //parent node properties
/*
 console.log(itemlist.parentNode);
 itemlist.parentNode.style.backgroundColor = '#f4f4f4';
 console.log(itemlist.parentNode.parentNode.parentNode);

 //parentElement
 console.log(itemlist.parentElement);
 itemlist.parentElement.style.backgroundColor = '#f4f4f4';
 console.log(itemlist.parentElement.parentElement.parentElement);
*/
 //child nodes
/*
 console.log(itemlist.children);
 console.log(itemlist.children[1]);
 itemlist.children[1].style.backgroundColor='yellow';

 //first child
 console.log(itemlist.firstElementChild);

 itemlist.firstElementChild.textContent = 'Hello';

 console.log(itemlist.lastElementChild);

 itemlist.lastElementChild.textContent = 'Hello 4';
*/

//sibling
//console.log(itemlist.nextElementSibling);

//previous sibling

//console.log(itemlist.previousElementSibling);

//create element
var newDiv = document.createElement('div');
//add class
newDiv.className ='hello';


//add id
newDiv.id = 'hello1';

//add attribute
newDiv.setAttribute('title','hello div');

//create text node
var newDivText = document.createTextNode('Hello world');
//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);