document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);


// Get local txt
function getText(){
    fetch('test.txt')
    .then(function(response){
       return response.text();
    })
    .then(function(data){
        document.getElementById('output').innerHTML = `
        <p>${data}</p>
        `
    })
    .catch(function(err){
        console.log(err);
    })
}

// Get local Json
function getJson(){
    fetch('post.json')
    .then(response => response.json())
    .then(data => {

        let output = '';

        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


// Get from external API
function getExternal(){
    fetch('https://api.github.com/users')
    .then(function(response){
       return response.json();
    })
    .then(function(data){

        let output = '';

        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    })
}

