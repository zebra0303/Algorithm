var cache = [0, 1],
log = console.log;

function fibo (n) {
  if(typeof cache[n-1] !== "undefined") {
    return cache[n-1];
  }
  else {
    rtn_val = fibo(n-1) + fibo(n-2);
    cache[n-1] = rtn_val;

    return rtn_val;
  }
}

log(fibo(1));
log(fibo(2));
log(fibo(7));

//log(fibo(1477));

//log(cache);
