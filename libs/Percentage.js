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
  }
};

export default Percentage;