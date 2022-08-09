//  feetToInch
function feetToInch(getInch) {
    // onefeet= 12 inch
    let oneFeet = 12;
    getInch *= oneFeet;
    return getInch;
}
const getInch = (70);
const inch = feetToInch(getInch);
console.log(inch);