// array methods
let arr = [20, 585, 63, 14, 253, 58, 21, 52, 65, 320, 252, 3, 2, 4];
// array length
// console.log(arr.length);
// console.log(arr);
// array value change by index
arr[3] = 80;
// console.log(arr);
// add new value
arr.push(23, 40);
// console.log(arr);
// delete value
arr.pop();
// console.log(arr);

// loop in array
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}
// print more than 80 in a array
let largeNumber =[];
for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  if (element > 80) {
    largeNumber.push(element);
  }
}
console.log(largeNumber);
