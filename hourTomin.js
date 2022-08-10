// hour to minutes
function getMinutes(hours) {
  // 1 hour = 60 minutes
  const totalMinutes = hours * 60;
  return totalMinutes;
}
const minutes = getMinutes(25);
console.log(minutes);
