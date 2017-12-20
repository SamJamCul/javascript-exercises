var removeFromArray = function(array, removee) {
  var arrayLength = array.length;
  var argLength = arguments.length;
  for (var i = 0; i < arrayLength; i++) {
    for (var j = 1; j < argLength; j++) {
      if (array[i] === arguments[j]) {
        console.log(array[i])
        array.splice(i, 1);
        j--;
      }
    }
  }
  return array
}
module.exports = removeFromArray
