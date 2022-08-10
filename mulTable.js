// multiplication table
function multiplicationTable(number) {
    let mulArry = [];
    for (let i = 1; i <= 10; i++){
        let mul = i * number;
        mulArry.push(mul);
    }
    return mulArry;
}
const mulTable=multiplicationTable(13);
console.log(mulTable);