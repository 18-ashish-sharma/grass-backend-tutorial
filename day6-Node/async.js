// async await // .then .catch // interval(time)
const axios = require('axios');

// console.log('First');

// setTimeout(() => {
//     console.log('Second');
// }, 4000);

// console.log('Third');
// console.log('Third');
// console.log('Third');
// console.log('Third');
// console.log('Third');
// console.log('Third');
// console.log('Third');
// console.log('Third');
// console.log('Third');
// console.log('Third');
// function x() {
//     setTimeout(() => {
//         return 'OK'; 
//     }, 2000);
// }
// async function add(a, b) {
//     // f(a) // f(b)
//     const arr = [];
//     const res = await x() // wait for this to complete than proceed further. call arr
//     arr.push(res);

//     console.log(arr);
// }
// add(1, 2);

async function fetchData() {
    const resposnse = await axios.get('https://jsonplaceholder.typicode.com/users');
    // const resJson = await resposnse.json();
    console.log(resposnse);
}
fetchData(); 
// https://codesandbox.io/s/fetch-36z3sr

// async await -> need a diagram with definations.
// get, put, post, delete , patch -> diff b/w put and patch.
// Event loop diagram.
// Event loop react app (Old batch).