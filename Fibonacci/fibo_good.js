var cache = [0, 1],
log = console.log;

function fibo (n) {
  if(typeof cache[n] !== "undefined") {
    return cache[n];
  }
  else {
    cache[n] = fibo(n-1) + fibo(n-2);

    return cache[n];
  }
}
/*
for(var i=0; i<100; i++) {
  log(fibo(i+1));
}
*/
log(fibo(1478));

log("golden ratio : " + fibo(1476)/fibo(1475));

//log(cache);
//for(idx in cache) {
//  console.log(idx + " : " + cache[idx]);
//}
