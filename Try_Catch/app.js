const user = {
    email: 'laurens@email.com'
}

try{

    // Produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    // null.myFunction();

    // Will produce SyntaxError
    // eval('Hello world');

    // Will produce a URIError
    // decodeURIComponent('%');


    if(!user.name){
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }

} catch(error){
    console.log(`User Error: ${error.message}`);
    // console.log(`This is the error: ${error}`);
    // console.log(error.message);
    // console.log(error.name);
    // console.log(error instanceof ReferenceError);
    // console.log(error instanceof TypeError);

}finally{
    console.log("Finally runs regardless of result...");
}

console.log('Program continues...');