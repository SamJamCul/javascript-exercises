var sumAll = function(x, y) {
  let large;
  let small;
  let total = 0;
  if (x < 0 || y < 0 || typeof x != "number" || typeof y != "number") {
    return "ERROR"
  }
  if (x < y) {
    small = x
    large = y;
  } else {
    small = y
    large = x;
  }
  for (var i = small; i <= large; i++) {
    total += i;
  }
  return total;
}

console.log(sumAll(1, [1, 2]))

module.exports = sumAll
