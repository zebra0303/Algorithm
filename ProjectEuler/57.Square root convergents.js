const log = console.log;
const numTry = 1000;
let ans = 0;
let numUp = 3n;
let numDown = 2n;

function getNumLen(num) {
  return num.toString().length;
}

for (let i=0; i<numTry-1; i++) {
  const prevNumDown = numDown;
  numDown = prevNumDown + numUp;
  numUp = numDown + prevNumDown;

  if (getNumLen(numUp) > getNumLen(numDown)) {
    ans++;
  }
}

log(ans);


