const log = console.log;

const fibo = (num) => {
  const sq5 = Math.sqrt(5);
  return Math.floor((1/sq5)*(Math.pow((1 + sq5)/2, num) - Math.pow((1 - sq5)/2, num))); 
}

log(fibo(1474));