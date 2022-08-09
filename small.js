function smallNumber(num1, num2, num3) {
    let smallNum = Math.min(num1, num2, num3);
    return smallNum
}
const small = smallNumber(20, 3, 4);
console.log(small);