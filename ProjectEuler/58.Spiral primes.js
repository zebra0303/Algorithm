const log = console.log;

const arrPnum = [2, 3, 5, 7, 11];
let cntPnum = arrPnum.length;
let lastPnum = arrPnum[cntPnum - 1];

let cntSpiralPrime = 0;
let ratioSpiralPrime = 1;
let width = 1;
let nth = 1;
let num = 1;

function isPrime(num) {
  let rtnVal = true;

  for (let i = 2; arrPnum[i] <= Math.sqrt(num); i++) {
    const pnum = arrPnum[i];
    if (num % pnum === 0) {
      rtnVal = false;
      break;
    }
  }

  return rtnVal;
}

while (ratioSpiralPrime >= 0.1) {
  // since every 4th number is sqare number 9 25 49 ...
  for (let i=0; i<3; i++) {
    num += 2*nth;

    while (lastPnum + 2 < num) {
      lastPnum += 2;
      if (isPrime(lastPnum)) {
        arrPnum[cntPnum] = lastPnum;
        cntPnum++;
      }
    }

    if (isPrime(num)) {
      cntSpiralPrime++;

      if (lastPnum < num) {
        arrPnum[cntPnum] = num;
        lastPnum = num;
        cntPnum++;
      }
    }
  }

  width = 1 + 2*nth;
  ratioSpiralPrime = cntSpiralPrime/(1 + 4*nth);
  nth++;
}

log(width);
