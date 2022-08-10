// second number of array
function secondHeighest(numbers) {
    let first = -1;
    let second = -1;
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if (element > first) {
            second = first;
            first = element;
        } else if (element>second && element != first) {
            second = element;
        }
    }
    return second;
}
const numbersArr = [25, 36, 85, 64,38,68,99,102,658];
const numbers = secondHeighest(numbersArr);
console.log(numbers);



/* 
function findSecondLargestElem(arr){
    let first = -1 , second = -1;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1]
findSecondLargestElem(arr);
*/