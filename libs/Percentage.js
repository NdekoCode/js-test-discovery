const Percentage = {
  evolution: function (a, b) {
    if (a === 0) {
      return Infinity;
    }
    const perc = this.round((b - a) / a);
    return perc;
  },
  round: function (value) {
    return Math.round(10000 * value) / 100;
  },
  wait: function (time, cb) {
    setTimeout(function () {
      cb(18);
    }, time);
  }
};

export default Percentage;