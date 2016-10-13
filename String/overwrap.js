/*
  return overwrapping value of two input strings
*/
"use strict";

var a = "abcdef",
    b = "efghi";

function chkOverWarp(a, b) {
    var lenA =  a.length,
    lenB = b.length,
    chkLen = Math.min(lenA, lenB),
        bottomToTopA = "",
        bottomToTopB = "",
        topToBottomA = "",
        topToBottomB = "";

    for (let i = 0; i < chkLen; i++) {
      bottomToTopA = a[lenA - i - 1] + bottomToTopA;
      bottomToTopB = b[lenB - i - 1] + bottomToTopB,
      topToBottomA += a[i],
      topToBottomB += b[i];

      //console.log("bottomToTopA: " + bottomToTopA);
      //console.log("topToBottomB: " + topToBottomB);
      //console.log("topToBottomA: " + topToBottomA);
      //console.log("bottomToTopB: " + bottomToTopB);

      if(topToBottomA === bottomToTopB || bottomToTopA === topToBottomB) {
        return true;
      }
    }
    return false;
}

console.log(chkOverWarp(a, b));
