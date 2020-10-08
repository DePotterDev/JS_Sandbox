document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create an XHR Object
    const xmlHttp = new XMLHttpRequest();

    // OPEN
    xmlHttp.open('GET', 'data.txt', true);
    // console.log('Ready state', xmlHttp.readyState);

    // Optional - Used for spinners/loaders
    xmlHttp.onprogress = function(){
        console.log('Ready state', xmlHttp.readyState);
    }

    xmlHttp.onload = function(){
        console.log('Ready state', xmlHttp.readyState);
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`

        }
    }

    // xmlHttp.onreadystatechange = function(){
    //     console.log('Ready state', xmlHttp.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    XPathResult.onerror = function(){
        console.log('Request error...');
    }

    xmlHttp.send();

    // HTTP Statuses
    // 2xx: "Success"
    // 200: "OK"
    // 4xx: "Client Error"
    // 403: "Forbidden"
    // 404: "Not Found"
    // 5xx: Server Error
}