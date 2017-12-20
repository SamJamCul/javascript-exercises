var leapYears = function(year) {
  if (year % 400 != 0 && year % 100 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return false
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(leapYears(1996))
console.log(leapYears(2000))
console.log(leapYears(1900))

module.exports = leapYears
