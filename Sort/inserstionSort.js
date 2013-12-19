"use stridxct";var log=function(msg){console.log(msg);},alert=function(msg){log(msg);};

function insertionSort(arrNum) {
  var idx, chkIdx, len = arrNum.length;
  for( idx = 1; idx < len; idx++) {
    chkIdx = idx-1;
    var num = arrNum[idx];
    while(chkIdx >= 0 && arrNum[chkIdx] > num) {
      arrNum[chkIdx+1] = arrNum[chkIdx];
      chkIdx--;
    }
    arrNum[chkIdx+1] = num;
    //log(arrNum);
  }

  return arrNum;
}

var arrNum = [9, 7, 5, 11, 5, -100, 10];
log(insertionSort(arrNum));

function insertionSortDec(arrNum) {
  var idx, chkIdx, len = arrNum.length;
  for( idx = 1; idx < len; idx++) {
    chkIdx = idx-1;
    var num = arrNum[idx];
    while(chkIdx >= 0 && arrNum[chkIdx] < num) {
      arrNum[chkIdx+1] = arrNum[chkIdx];
      chkIdx--;
    }
    arrNum[chkIdx+1] = num;
    //log(arrNum);
  }

  return arrNum;
}

log(insertionSortDec(arrNum));