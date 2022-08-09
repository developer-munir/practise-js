function wordReverse(str) {
    const word = str.split(' ');
    const newStr = [];
    for (let i = word.length - 1; i >= 0; i--){
        let element = word[i];
        newStr.push(element);
        newStr.join;
    }
    return newStr;
}
const myString = 'i am a good boy';
const reverse = wordReverse(myString);
console.log(reverse);