// reverse string
function reverseString(names) {
    let addingString = '';
    // let total = [];
    for (let i = names.length-1; i >= 0; i--){
        let element = names[i];
        addingString += element;
        // total.push(addingString);
        // console.log(addingString);
    }
    return addingString;

}
const names = 'Munir Hossain Juwel';
const reverse = reverseString(names);
// console.log(reverse);