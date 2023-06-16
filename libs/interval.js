module.exports = {
  intervalToObj(ms) {
    ms = Math.floor(ms / 1000);
    let seconds = ms;
    let minutes = 0;
    if (ms >= 60) {
      minutes = Math.floor(seconds / 60);
      seconds = Math.round(ms % 60);
    }
    console.log(ms, minutes, seconds);
    return {
      days: 0,
      hours: 0,
      minutes,
      seconds,
    };
  },
};
