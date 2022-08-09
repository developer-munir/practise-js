// array big number
function bigNumber(getBig) {
    let big = numbers[0];
    for (let i = 0; i < getBig.length; i++){
        let element = getBig[i];
        if (element>big) {
            big = element;
        }
    }
    return big;
}
const numbers = [56, 78, 84, 84, 23, 88];
const bigNum = bigNumber(numbers);
console.log(bigNum);