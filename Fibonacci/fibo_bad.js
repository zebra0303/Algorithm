var log = console.log;

function fibo(n) {
    if (n < 2) {
        return n;
    }

    return fibo(n - 1) + fibo(n - 2);
}

//log(fibo(1));
//log(fibo(2));
//log(fibo(17));
log(fibo(1000));

//log(cache);
