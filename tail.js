function tail(array) {
  let series = [];
  for (let i = 1; i < array.length; i++) {
    series.push(i);
  }
  return series;
};
module.exports = tail
