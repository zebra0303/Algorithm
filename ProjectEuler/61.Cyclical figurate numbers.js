const log = console.log;

let arrCyclicalNums = [];
const objPolyNums = {
  arrTri: [],
  arrSqua: [],
  arrPenta: [],
  arrHexa: [],
  arrHepta: [],
  arrOcta: [],
};

const arrPloyName = [null, null, null, "arrTri", "arrSqua",
  "arrPenta", "arrHexa", "arrHepta", "arrOcta"];

 // Set the polygonal numbers that is needed for checking
// https://mathworld.wolfram.com/PolygonalNumber.html
// Pol(m;n+1)=Pol(m;n)+(m−2)n+1
for (let i = 3; i < 9; i++) {
  let polyNum = 1;
  let nth = 0;
  while (polyNum < 10000) {
    if (polyNum > 1000) {
      objPolyNums[arrPloyName[i]].push(polyNum);
    }
    nth++;
    polyNum += (i - 2) * nth + 1;
  }
}

// Object Deep copy
function deepCopyObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Recursive function that is checking the cyclical figurate numbers
function findCyclicalNums(arrAns, chkObjPolyNums) {
  if (arrCyclicalNums.length > 0) {
    return true;
  }

  mainLoop: for (const [key, val] of Object.entries(chkObjPolyNums)) {
    const chkArr = val;
    const lenArrAns = arrAns.length;
    let arrNumFound;

    if (lenArrAns === 0) {
      arrNumFound = chkArr;
    } else {
      const chkNum = arrAns[lenArrAns - 1];
      arrNumFound = chkArr.filter((num) => (num + "").substr(0, 2) === (chkNum + "").substr(2));
    }

    const lenArrNumFound = arrNumFound.length;

    if (lenArrNumFound > 0) {
      const objCopy = deepCopyObj(chkObjPolyNums);

      for (let i = 0; i < lenArrNumFound; i++) {
        const numFound = arrNumFound[i];
        delete objCopy[key];
        const arrFound = [...arrAns, numFound];

        if (lenArrAns === 5 && (numFound + "").substr(2) === (arrAns[0] + "").substr(0, 2)) {
          arrCyclicalNums = arrFound;
          break mainLoop;
        } else {
          findCyclicalNums(arrFound, objCopy);
        }
      }
    }
  }
}

findCyclicalNums([], objPolyNums);
log(arrCyclicalNums.reduce((accu, cur) => accu + cur));
