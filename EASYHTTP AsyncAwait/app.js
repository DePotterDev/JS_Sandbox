const http = new EasyHTTP;



// User Data
const data = {
    name: 'Laurens',
    username: 'de Potter',
    email: 'dp@gmail.com',
}


// Create User
http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err));

// UPDATE User
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));


// GET Users
const users = http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

// DELETE User
http.delete('https://jsonplaceholder.typicode.com/users/3')
.then(data => console.log(data))
.catch(err => console.log(err));