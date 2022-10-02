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
/*
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
*/


var form =document.getElementById('addForm');
var itemlist = document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);

//Add item
function addItem(e)
{
    e.preventDefault();

    //console.log(1);
    /*
    <input type="text" class="form-control mr-2" id="item">
      
      <br>
        <input type="text" class="form-control mr-2" id="description">
        <input type="submit" class="btn btn-dark" value="Submit">
      </br>
      */
    var newItem = document.getElementById('item').value;
    const description = document.getElementById('description').value;


    const descriptionNode = document.createTextNode(description);
    //create new li element

    var li = document.createElement('li');
    //Add class name to it
    li.className = 'list-group-item';
    //console.log(li);

    //add text ndoe with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(descriptionNode);
    

    var deleteBtn = document.createElement('button');
//add clasesto deletebtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //adding edit button
    var editButton = document.createElement('button');
    editButton.className = 'btn btn-danger btn-sm float-right delete';
    editButton.appendChild(document.createTextNode('E'));
    li.appendChild(editButton);
    

    //aapendtext ndoe

    deleteBtn.appendChild(document.createTextNode('X'));
// append button to li
    li.appendChild(deleteBtn);




//append li to list
    itemlist.appendChild(li);

    //what about deleting items
    // add and event lsitener
    itemlist.addEventListener('click', removeItem);


//function removeItem
    function removeItem(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?'))
            {
                var li=e.target.parentElement;
                itemlist.removeChild(li);

            }
        }

        //adding filter
        var filter = document.getElementById('filter');

        //add evetn listenber

        filter.addEventListener('keyup', filterItems);

        //add filter fucntion
        function filterItems(e)
        {
            //convert to lower if upper
            var text = e.target.value.toLowerCase();
            //console.log(text);

            //get element by tagename

            var items = itemlist.getElementsByTagName('li');
            //convert tto array
            Array.from(items).forEach(function(item){
                var itemName = item.firstChild.textContent;
                const description = item.childNodes[1].textContent;

                if(itemName.toLowerCase().indexOf(text) != -1  || description.toLowerCase().indexOf(text) != -1 ){
                    item.style.display = 'block';
                }
                else
                {
                    item.style.display = 'none';
                }
            });



        }

    
    }





}


