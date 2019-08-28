const log = console.log,
  cache = [0, 1];

function fibo(num) {
  if (typeof cache[num] === "undefined") {
    cache[num] = fibo(num - 1) + fibo(num - 2);
  }
  return cache[num];
}

/*
for(let i=0; i<100; i++) {
  log(fibo(i+1));
}
*/
log(fibo(1478));

log("golden ratio : " + fibo(1476) / fibo(1475));

//log(cache);
/*
for (let idx in cache) {
  console.log(idx + " : " + cache[idx]);
}
*/
