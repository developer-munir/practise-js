// positiveNumbers
function positiveNumbers(numbers) {
    let postive = [];
    for (let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if (number === 0 || number <= 0) {
            break;
        } else {
            postive.push(number);
        }
    }
    return postive;
}
const numbers = [20, 30, 52, 5, 65, 41, -74, 25, 658, 45, 5];
const positiveNumber = positiveNumbers(numbers);
console.log('positive numbers are :',positiveNumber);
 