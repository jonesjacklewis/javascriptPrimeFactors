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

function indexForm(array) {
  return [...new Set(array.map((item) => (countOccurrences(array, item) > 1 ? `${item}**${countOccurrences(array, item)}` : `${item}`)))];
}

function primeFactors(n, displayIndexForm = false) {
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

  return displayIndexForm ? indexForm(primes) : primes;
}

// eslint-disable-next-line no-console
console.log(primeFactors(9876, true));
