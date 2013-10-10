;"use strict";
var log=function(msg){console.log(msg);};
var alert=function(msg){log(msg);};

var arr = [3,6,7,5,3,6,2,9,1,5,33,-12,0,-122,-Infinity, 125, 33, 55, 77];

Array.prototype.heapSort = function () {
	arr = this;

	function _chunk(list) {
		var chunks = [];	
		for(var i=0; i<list.length; i++) {
	    		if(list.length % 2 == 1 && i+1 == list.length) {
	    		    	chunks.push(list[i]);
	    		} else {
	        		if(i % 2 == 0) {
					chunks.push(Math.max(list[i], list[i+1]));
				}
	       	}
	    }

	    return chunks; 
	}
	 
	function _bubble(list) {
		var remainder = _chunk(list),
		heap = [list];
	 
		heap.push(remainder);
		while(remainder.length != 1) {
			remainder = _chunk(remainder);
			heap.push(remainder);
		}
	 
		return heap;
	}
	 
	function _getTopIdx(heap) {
		var curIdx = 0,
		value = heap[heap.length-1][0],
		i = heap.length -2;
	 
		while(i != -1) {
			if(!heap[i].length % 2 && curIdx > 0) {
				curIdx--;
			}
	 
			if(heap[i][curIdx + 1] == value) {
				curIdx++;
				curIdx = i ? curIdx << 1 : curIdx;
			} else if(curIdx) {
				curIdx = i ? curIdx << 1 : curIdx;
	 		}
				
			i--;
		}
	 
		return curIdx;
	}
	 
	function _heapSort(list) {
		var sortedList = [],
			listCopy = list,
			heap = []
			targetLength = list.length;
	 
		while(sortedList.length != targetLength) {
			heap = _bubble(listCopy);
			// unshift <-> push for getting a everse sorting data.
			sortedList.unshift(heap[heap.length-1][0]);
			listCopy.splice(_getTopIdx(heap), 1);
		}		
	 
		return sortedList;
	}
	return _heapSort(arr);
};

alert(arr.sort());
alert(arr.heapSort());