//  array or list or []
// write small note about what is an array.
let arr = [1,2,3,4,5,6,7,8,9];
let time = [10, 9, 8 ,7]
//          1    2 3  4
// console.log(arr);
time.push(6); // push in the end of the array

console.log(time);
let val = time.pop(); // remove

console.log(time);
console.log(val);
let bigArray = time.concat(arr);
console.log(bigArray);

// https://www.w3schools.com/js/js_array_methods.asp

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
let result = [];
