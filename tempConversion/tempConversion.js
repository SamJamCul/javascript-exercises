var ftoc = function(far) {
  return (far - 32) * (5 / 9)
}

var ctof = function(cel) {
  return (cel * (9 / 5)) + 32
}

module.exports = {
  ftoc,
  ctof
}
