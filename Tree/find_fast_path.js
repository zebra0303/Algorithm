function find_mem(start, end, tree) {
  if(tree[start.owner].level === 0 && tree[end.owner].level === 0) {
    return start.owner;
  }
  else if(start.owner === end.name) {
    return end.name;
  }
  else if(start.owner === end.owner) {
    return start.owner;
  }
  else {
    if(start.level > end.level) {
      return find_mem(tree[start.owner], end, tree);
    }
    else {
      return find_mem(start, tree[end.owner], tree);
    }
  }
}

function processData(input) {
  var arr_input = input.split(/\r?\n/),
  len = parseInt(arr_input[0], 10),
  arr_sel = arr_input.slice(1, 3),
  arr_dat = arr_input.slice(3, len+1),
  arr_mem,
  sel01 = arr_sel[0],
  sel02 = arr_sel[1],
  dlen = arr_dat.length,
  slen = arr_sel.length,
  i, j, level, rtn, start, end,
  tree = {};

  for(i=0; i<dlen; i++) {
    arr_mem = arr_dat[i].split(" ");
    manager = arr_mem[0];
    member = arr_mem[1];

    if(i===0) {
      tree[manager] = {name: manager, level:0, owner: null};
    }

    level = tree[manager].level + 1;
    tree[member] = {name: member, level: level, owner: manager};
  }

  if(tree[sel01].level > tree[sel02].level) {
    start = tree[sel01];
    end = tree[sel02];
  }
  else {
    start = tree[sel02];
    end = tree[sel01];
  }

  rtn = find_mem(start, end, tree);
  console.log(rtn);
}

var fs = require('fs');
fs.readFile('/home/larry/Dropbox/Algorithm/input.txt', function (err, data) {
  if (err) throw err;
  var input = data.toString();
  processData(input);
});

/* Input Data

10
Sara
Qing
Jone Tom
Jone Toby
Toby Ann
Tom Natan
Tom Sara
Sara Larry
Natan Qing
Natan Fred
*/
