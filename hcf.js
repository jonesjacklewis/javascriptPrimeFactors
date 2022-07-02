function isPrime(number) {
  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  if (number % 2 === 0) {
    return false;
  }

  for (let i = 3; i < Math.floor(Math.sqrt(number)) + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function getNextPrime(start) {
  for (let i = start + 1; i <= start * 100; i += 1) {
    if (isPrime(i)) {
      return i;
    }
  }
  return -1;
}

function countOccurrences(arr, item) {
  return arr.filter((i) => i === item).length;
}

function primeFactors(n) {
  let currentPrime = 2;
  const primes = [];

  let product = n;

  while (product !== 1) {
    if (product % currentPrime === 0) {
      primes.push(currentPrime);
      product /= currentPrime;
      currentPrime = 2;
    } else {
      currentPrime = getNextPrime(currentPrime);
    }
  }

  return primes;
}

function lcm(number1, number2) {
  const number1Factors = primeFactors(number1);
  const number2Factors = primeFactors(number2);

  const allFactors = [...new Set([...number1Factors, ...number2Factors])];

  let lcmValue = 1;

  // eslint-disable-next-line no-restricted-syntax
  for (const factor of allFactors) {
    if (countOccurrences(number1Factors, factor) > countOccurrences(number2Factors, factor)) {
      lcmValue *= factor ** countOccurrences(number1Factors, factor);
    } else {
      lcmValue *= factor ** countOccurrences(number2Factors, factor);
    }
  }

  return lcmValue;
}

function hcf(number1, number2) {
  return (number1 * number2) / lcm(number1, number2);
}

// eslint-disable-next-line no-console
console.log(hcf(8, 12));
