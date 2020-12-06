const log = console.log;
let max = 0;

for (let base=1; base<100; base++) {
  for (let exp=1; exp<100; exp++) {
    const sum = getSumDigit(base, exp);
    if (max < sum) {
      max = sum;
    }
  }
}

log(max);

/**
 * get sum of each digit number in Math.pow(base, exp)
 *
 * @param {integer} base base number
 * @param {integer} exp  exponent number
 *
 * @return {integer}  sum of each array digit value
 */

function getSumDigit(base, exp) {
  // set array with num ex) 1234 => [1, 2, 3, 4]
  const arrDigit = [...(base + '').split('')
    .map(strNum => parseInt(strNum, 10))];

  for (let i=1; i<exp; i++) {
    const lenArr =  arrDigit.length;
    // multifly each array item with base number
    for (let j=0; j<lenArr; j++) {
      arrDigit[j] *= base;
    }

    // rearange array number
    for (let k=lenArr-1; k>=0; k--) {
      let digit = arrDigit[k];

      if (digit >= 10) {
        const overDigit = Math.floor(digit/10);
        arrDigit[k] = digit%10;

        if(k === 0) {
          arrDigit.unshift(overDigit);
          k++;
        } else {
          arrDigit[k-1] += overDigit;
        }
      }
    }

  }

  // return sum of each array digit value
  return arrDigit.reduce((acc, cur) => acc + cur);
}
