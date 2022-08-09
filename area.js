// 3 side area calculation
// area = 0.25 * √( (a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c) )
function areaCalculation(side1, side2, side3) {
    const area = 0.25 * Math.sqrt((side1 + side2 + side3) * (-side1 + side2 + side3) * (side1 - side2 + side3) * (side1 + side2 - side3));
    return area;
}
const area=areaCalculation(5,6,3);
console.log('Area =',area);