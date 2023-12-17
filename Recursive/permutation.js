const log = console.log;

// https://www.youtube.com/watch?v=0tcgYHU8IIs
const permutations01 = (arr) => {
  const result = [];

  const permutate = (i, arr) => {
    if (i === arr.length) {
      result.push([...arr]);
    }

    for (let j = i; j < arr.length; j++) {
      // swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      permutate(i + 1, arr);
      // swap back;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  permutate(0, arr);

  return result;
};

// https://www.youtube.com/watch?v=us0cYQXQpxg
const permutations02 = (arr) => {
  if (arr.length === 0) return [[]];

  let [first, ...rest] = arr;

  const permsRest = permutations02(rest);
  const result = [];

  permsRest.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      result.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  });

  return result;
};

log(permutations01(['a', 'b', 'c']));
log(permutations02(['a', 'b', 'c']));
