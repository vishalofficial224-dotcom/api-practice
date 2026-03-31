

const p = fetch("https://api.thecatapi.com/v1/images/search");

const p2 = fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all");

Promise.all([p, p2]).then((values) => {
    console.log(values);
})