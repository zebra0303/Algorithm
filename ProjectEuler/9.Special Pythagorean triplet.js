var log = console.log;

var x = 0,y = 0, z = 0;
for (let a = 1; a < 225; a++)
{
  if ((1000 * (500 - a)) % (1000 - a) == 0)
  {
    x = a;
    y = 1000 * (500 - a) / (1000 - a);
        // ((a+b+c)*((a+b+c)/2 - a ))  / (b+c) = b
        // 1000*(500 - 200) / 375+425
    z = 1000 - x - y;
    break;
  }
}
log("x:" + x + " ,y:" + y +" ,z:" + z + " = " + x*y*z);
/*
https://ko.wikipedia.org/wiki/%ED%94%BC%ED%83%80%EA%B3%A0%EB%9D%BC%EC%8A%A4_%EC%82%BC%EC%A1%B0
(a, b) => (m^2 - n^2, 2mn) 으로 구하면 더 쉽게 구할 수 있음
m(m+n) = 5^3*2^2 인 케이스로 답을 구할 수 있음
*/
