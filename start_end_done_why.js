console.log ("start");

const promise = new Promise((resolve, reject) => {
    resolve("Done");
})

promise.then((res) => console.log(res));

console.log("end")