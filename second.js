function secondHeighest(numbers) {
    let number = [0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element > number) {
            number = element;
        }
    }
    return number;
}
const numbersArr = [25, 36, 85, 64];
const numbers = secondHeighest(numbersArr);
console.log(numbers);