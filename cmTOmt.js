// centimeterToMeter 
function centimeterToMeter(getMeter) {
  // one centimeter = 0.01
    let oneCm = 0.01;
    getMeter *= oneCm;
    return getMeter;
}
const getMeter = (256);
const meter = centimeterToMeter(getMeter);
console.log(meter);