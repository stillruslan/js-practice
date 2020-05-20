'use sttrict';

let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(Math.round(Math.random() * 10) + 1);
}
console.log(arr);