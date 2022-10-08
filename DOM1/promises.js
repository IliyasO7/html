const posts = [
    {title:'Post One', body: 'This is post one'},
    { title:'Post Two', body: 'This is post two' }
 ];


 function getPosts(){
    setTimeout(() =>
    {
        let output='';

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    },1000);
 }
/*
function createPost(post)
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if(!error){
                resolve();
            }
            else
            {
                reject('Error: Something went wrong');
            }
        },2000);
    });
    
}*/

function createPost(post)
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            let UpdlastUserActivity = new Date().getTime();
            const error = false;

            if(!error){
                console.log("Last user Activity :"+ UpdlastUserActivity);
                resolve();

            }
            else
            {
                reject('Error: Something went wrong');
            }
        },2000);
    });
        
}

function deletePosts(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(posts.length!=0){
                resolve();
            }
            else
            {
                reject('Arrays is empty');
            }
            posts.pop();
        
        },1000);
    })
    
}

//createPost( {title: 'Post Three',body:'This is post three'}).then(getPosts).then(deletePosts).then(getPosts).then(deletePosts).then(getPosts).then(deletePosts).then(getPosts).then(deletePosts).catch(err => console.log(err));
createPost({title: 'Post Three',body:'This is post three'}).then(getPosts).catch(err => console.log(err));
//createPost({title:'Post Four',body:'This is post four'}).then(getPosts).then(deletePosts).then(getPosts).then(deletePosts).then(getPosts).then(deletePosts).then(getPosts).then(deletePosts).then(getPosts).then(deletePosts).catch(err => console.log(err));


/*
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>
setTimeout(resolve,2000,'Goodbye'));

Promise.all([promise1,promise2,promise3]).then((values)=> console.log(values));
*/