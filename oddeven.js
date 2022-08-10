// odd even
function oddEven(number) {
    if (number % 5 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const number = oddEven(4);
console.log(number);