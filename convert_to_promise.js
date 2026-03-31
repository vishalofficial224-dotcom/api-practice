function getData(callback) {
    setTimeout( () => {
        callback("data recieved");
    }, 10000)
}


const callbackPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data recieved");
    }, 10000);
        

}
)


console.log(callbackPromise)
callbackPromise.then((data) => {
    console.log(data);
})


// getData wants data and callback is giving it later so call back will become a promise and we will resolve  using .then



function getDataTwo(x) {
    return x
    
}


getDataTwo(callbackPromise).then((data) => {
    console.log(data)
})



