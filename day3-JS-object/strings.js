// Strings in javascript. : https://www.w3schools.com/js/js_string_methods.asp

const foul = 'Priyansh';
// index      01234567  
// console.log(foul.length);
// console.log(foul[5]);

for (let i = 0; i < foul.length; i++){
    // console.log(foul[i]);
}

const variables = 'shubham@grass.com';
//  method split
// join -> joins array with specific value
// replace
console.log(variables.split('@').join('+').split('+').join('-+').split('s'));


let y = "    priya                "
console.log(y.trim())

// charAt