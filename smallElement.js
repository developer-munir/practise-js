// small element
function smallElement(numbers) {
    let smallNum = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if (element < smallNum) {
            smallNum = element;
        }
    }
    return smallNum;
}
const numbers = [21, 35, 35, 74,1, 852, 12, 65, 3];
const small = smallElement(numbers);
console.log(small);