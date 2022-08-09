// prime number
function primeNumber(number) {
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

let prime = primeNumber(21);
console.log(prime);