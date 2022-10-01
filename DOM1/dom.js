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

var items = document.getElementsByClassName('list-group-item');
console.log(items);
//console.log(items[2]);

items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';

