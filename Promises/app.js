const posts = [
    {title: "Thrones of the wicked fox.", body:"A story of a brave little fox conquering it's fears."},
    {title: "Boyar Sons.", body:"Russian history of their fearsome viking warriors."},
    {title: "Disinformation", body:"A look into the various disinformation tactics."}
];

function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);

            // Just to test for errors
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: something went wrong.');
            }
            
        }, 2000);
    });

}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `
            <li>${post.title}</li>
            <ul><li>${post.body}</li></ul>
            `;
        });
        document.querySelector("ul").innerHTML = output;
    }, 1000);
}

createPost({title: "Into the masses", body: "How nuclear particles are made and their uses in modern society."}).then(getPosts).catch(function(err){
    console.log(err);
});

