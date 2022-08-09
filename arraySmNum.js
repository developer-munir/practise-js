function arrySmallNumber(small) {
    let lowestNumber = arr[0];
    for (let i = 0; i < small.length; i++){
        let element = small[i];
        if (lowestNumber > element) {
            lowestNumber = element;
        }
    }
    return lowestNumber;
}
const arr = [25, 36, 854, 14];
const smallNumber = arrySmallNumber(arr);
console.log(smallNumber);