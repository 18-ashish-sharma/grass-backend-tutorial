const arr = [10 ,32, 53, 4, 2, 1, 10];

function removeDuplicates(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
            // console.log(res)
        } else{           
            // console.log(arr[i]);
        }
    }
    console.log(res);
}

// removeDuplicates(arr);

const arr2 = [30, 60, 11, 32, 1845, 90886];

function evenElement(arr) {
    const even = [];
    const odd = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    console.log('odd--->>>', odd);
    console.log('even--->', even);
}
// evenElement(arr2);

const names = ['A', 'b', 'c', 'D', 'E', 'F', 'g'];

function letter(arr) {
    const uppercase = [];
    const lowercase = [];
    arr.forEach(element => {
        if (element == element.toUpperCase()) {
            uppercase.push(element)
        } else {
            lowercase.push(element);
        }
    });
    console.log(uppercase);
    console.log(lowercase);
}
// letter(names);

const pic = ['Ashish', 'priyansh', 'Mintu', 'priYa', 'JayeSh', 'izhar'];
// charAt

// this function checks first element of arr is capitalize
function checkFirstChar(arr){
    arr.forEach(element => {
       if(element[0] == element[0]) {
            console.log(element)
       }
    //    capitalize 1st letter
    });
}
// checkFirstChar(pic);

module.exports = {letter};