const Percentage = {
  evolution: (a, b) => {
    if (a === 0) {
      return Infinity;
    }
    const perc = parseInt((100 * (b - a)) / a);
    // console.log(perc);
    return perc;
  },
};

export default Percentage;
