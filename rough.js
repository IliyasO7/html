

 
 
 var multiply = function(x,y){
    return console.log(x*y);
 }


 var multiplyByTwo = multiply.bind(this,2);
 multiplyByTwo(3);


 

/*
var shoppingCart = {
    'Shampoo': 100,
    'Soap': 30,
    'Towel': 200,
    'Water': 50
}

var arr = Object.values(shoppingCart);
console.log(arr);

var sum =0;

for(var i=0;i<arr.length;i++)
{
    sum = sum + arr[i];
}

console.log(sum);



/*
arr.forEach(key => {
    var sum = sum + arr[key];
});

console.log(sum);



*/





























/*function buyCar(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('buy a car');
    
        },6000)

    })
    
}

function planAtrip(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('PLan a trip ');
        },2000)

    })
    
}

async function fun1(){
    const msg1 = await buyCar();
    console.log(msg1);
    const msg2 = await planAtrip();
    console.log(msg2);



}

*/



















/*function buyCar(){
    return new Promise((res,rej) => {
        setTimeout(()=>{
            res('buy a car')
        },6000);
    })
}

function planAtrip(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('plan a trip')
            
        },2000);
    })

}

function reachtoManali(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('reached mannali')
    
        },1000)
    })
}
/*
buyCar().then((msg)=>{
    console.log(msg)
    planAtrip().then((msg2)=>{
        console.log(msg2)
        reachtoManali().then((msg3)=>{
            console.log(msg3);
        })
    })

})*/
/*
async function fun1(){
    const msg = await buyCar();
    console.log(msg);
    const msg2 = await planAtrip();
    console.log(msg2);

}
fun1();*/

/*
console.log(printName);

console.log(a);



var a = 3;



var printName = (name) => {

console.log(name)

}
*/