const log = console.log;
const max = 4000000;
let ans = 0;
let prevFiboNum01 = 0;
let prevFiboNum02 = 1;
let fiboNum = 0;

while (fiboNum < max) {
  fiboNum = prevFiboNum01 + prevFiboNum02;
  prevFiboNum01 = prevFiboNum02;
  prevFiboNum02 = fiboNum;

  if (fiboNum % 2 === 0) {
    ans += fiboNum;
  }
}

log(ans);