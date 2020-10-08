const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, post){

//     if(err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// });


// Get Single Posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){

//     if(err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// });


// Create Data
const data = {
    title: "This is a title I made myself.",
    body: "This is some text I added to this post, tralalalala."

};


// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){

//     if(err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){

//     if(err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }

// });


// DELETE POST
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){

    if(err){
        console.log(err);
    }else {
        console.log(response);
    }
});

