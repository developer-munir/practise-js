// leap years
function getLeapYears(years) {
    let leapYearsNewArr = [];
    for (let i = 0; i < years.length; i++){
        let year = years[i];
        if (year % 4 === 0) {
            leapYearsNewArr.push(year);
        }
    }
    return leapYearsNewArr;
}
const years = [2023, 2024, 2025, 2028, 2030, 2032, 2020];
const leapYears = getLeapYears(years);
console.log(leapYears);