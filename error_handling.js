async function errorHandling() {

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        data.forEach(element => {
            console.log(element.name)
            
        });
    }
    catch(err) {
        console.log(err)
    }

    
}

errorHandling();