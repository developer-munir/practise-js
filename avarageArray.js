// avarage of array numbers
function avarage(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        total += number;
    }
    const getAvg = total / numbers.length;
    return getAvg;
}
const numbers = [45, 63, 73];
const avg = avarage(numbers);
console.log(avg);