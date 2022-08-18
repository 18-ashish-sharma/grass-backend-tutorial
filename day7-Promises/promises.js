const axios = require('axios');

// let grassPromise = new Promise(function (resolve, reject) {
//     // setTimeout(() => {
//     //     resolve(console.log('Promise resolved  --- Get a Job......!'));
//     // }, 2000)
//     resolve(console.log('Promise resolved  --- Get a Job......!'));
// })

// console.log(grassPromise);
// // grassPro

// let promise = new Promise(function(resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(("Server down please wait !!!!!!!")), 1000);
// });
// console.log(promise);

// with async await

async function fetchData() {
    try {
        const resposnse = await axios.get();
        console.log(resposnse);
    } catch (error) {
        console.log('Inside error');
        setTimeout(() => {
            console.log(error);
        }, 2000)
    }
}
// fetchData();

// use fetchdata with promises
let promise = new Promise(function(resolve, reject) {

});