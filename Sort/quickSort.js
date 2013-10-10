;"use strict";
var log=function(msg){console.log(msg);};
var alert=function(msg){log(msg);};

var arr = [3,6,7,5,3,6,2,9,1,5,33,-12,0,-122,-Infinity, 125, 33, 55, 77];

Array.prototype.swap = function (sIdx, tIdx ) {
	var tmp = this[sIdx];
	this[sIdx] = this[tIdx];
	this[tIdx] = tmp; 
}

Array.prototype.quickSort = function () {
	function _quickSort(arr, leftIdx, rightIdx) {
		if(leftIdx < rightIdx) {
			var pivot = arr[leftIdx],
			chkLeftIdx = leftIdx,
			chkRightIdx = rightIdx;

			while(chkLeftIdx < chkRightIdx) {
				while(arr[chkRightIdx] > pivot) {
					chkRightIdx--;
				}
				while(chkLeftIdx < chkRightIdx && arr[chkLeftIdx] <= pivot) {
					chkLeftIdx++;
				}
				
				arr.swap(chkLeftIdx, chkRightIdx);
			}

			arr.swap(leftIdx, chkLeftIdx);

			_quickSort(arr, leftIdx, chkLeftIdx-1);
			_quickSort(arr, chkLeftIdx+1, rightIdx);
		}

		return arr;
	}

	return _quickSort(this, 0, this.length -1);
};
alert(arr.sort());
alert(arr.quickSort());
