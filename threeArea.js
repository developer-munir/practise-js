// area = 0.25 * √ ((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c))
function threeSideArea(side1, side2, side3) {
    const area = 0.25 * Math.sqrt((side1+side2+side3)*(-side1+side2+side3)*(side1-side2+side3)*(side1+side2-side3));
    return area;
}
const areaOfThreeSide=threeSideArea(31, 25, 36);
console.log(areaOfThreeSide);