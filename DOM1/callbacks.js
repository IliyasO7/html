const posts = [
    {title:'Post One', body: 'This is post one',createdAt: new Date().getTime()},
    { title:'Post Two', body: 'This is post two',createdAt: new Date().getTime()}
 ];


 function getPosts(){
    
        let output='';

        for(let i=0;i<posts.length;i++){
            output += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago </li>`;
        }
        document.body.innerHTML = output;
 }

function createPost(post,callback)
{
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime() });
        callback();

    },2000)
}

function create4thPost(post,callback)
{
    setTimeout(() =>{
        posts.push({...post,createdAt: new Date().getTime()})
        callback()

    },6000)
}

createPost({title:'Post Three', body:'This is post three'}, getPosts);
create4thPost({title:'Post Four', body:'This is post four'}, getPosts);


