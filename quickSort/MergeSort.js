;"use strict";
var log=function(msg){console.log(msg);};
var alert=function(msg){log(msg);};

var arr = [3,6,7,5,3,6,2,9,1,5,33,-12,0,-122,-Infinity, 125, 33, 55, 77];

Array.prototype.mergeSort = function () {
	function _merge(arrLeft, arrRight){
	    var result = [],
	    leftIdx = 0,
	    rightIdx = 0;

	    while (leftIdx < arrLeft.length && rightIdx < arrRight.length){
	        if (arrLeft[leftIdx] < arrRight[rightIdx]){
	            result.push(arrLeft[leftIdx++]);
	        } else {
	            result.push(arrRight[rightIdx++]);
	        }
	    }

	    return result.concat(arrLeft.slice(leftIdx)).concat(arrRight.slice(rightIdx));
	}

	function _mergeSort(arr){
	    if (arr.length < 2) {
	        return arr;
	    }

	    var middle = Math.floor(arr.length / 2),
	    arrLeft    = arr.slice(0, middle),
	    arrRight   = arr.slice(middle),
	    params = _merge(_mergeSort(arrLeft), _mergeSort(arrRight));
	    
	    params.unshift(0, arr.length);
	    arr.splice.apply(arr, params);

	    return arr;
	}

	return _mergeSort(this);
}
alert(arr.sort());
alert(arr.mergeSort());