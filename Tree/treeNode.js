var log = console.log;
var input = [
  {"id": 2, parent_id: 1},
  {"id": 4, parent_id: 2},
  {"id": 6, parent_id: 3},
  {"id": 3, parent_id: 1},
  {"id": 5, parent_id: 2},
  {"id": 7, parent_id: 3},
  {"id": 1, parent_id: null}
];

// output {id: 1, children: [{id: 2, children[{id: 5, children[].....}]}]}
function tree_node(data) {
  var nodes = [],
  root_id;
  data.map(function(item) {
    if(item.parent_id !== null) {
      if(typeof nodes[item.parent_id] === "undefined") {
        nodes[item.parent_id] = {
          id: item.parent_id,
          children: []
        };
      }

      if(typeof nodes[item.id] === "undefined") {
        nodes[item.id] = {
          id: item.id,
          children: []
        };
      }

      nodes[item.parent_id].children.push(nodes[item.id]);
    }
    else {
      root_id = item.id;
      if(typeof nodes[item.id] === "undefined") {
        nodes[item.id] = {
          id: item.id,
          children: []
        };
      }
    }
  });

  //return nodes;
  return nodes[root_id];
}

log(tree_node(input));
