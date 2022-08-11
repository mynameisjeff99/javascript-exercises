const ftoc = function(temp) {
  let res = (temp - 32) * 5 / 9;
  res = Math.round(res * 10) / 10;
  return res;
};

const ctof = function(temp) {
  let res = temp * 9 / 5 + 32;
  res = Math.round(res * 10) / 10;
  return res;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
