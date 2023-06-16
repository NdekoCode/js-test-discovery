const SECONDS = 1000; //  Le nombre de milliseconde dans une seconde
const MINUTES = 60 * SECONDS; // Le nombre de milliseconde dans une minutes
const HOURS = 60 * MINUTES; // Le nombre de milliseconds dans une heure
const DAYS = 24 * HOURS; // Le nombre de milliseconds dans une journées
module.exports = {
  intervalToObj(ms) {
    let minutes = 0;
    let hours = 0;
    let days = 0;
    if (ms >= DAYS) {
      days = Math.floor(ms / DAYS);
      ms -= days * DAYS;
    }
    if (ms >= HOURS) {
      hours = Math.floor(ms / HOURS);
      ms -= hours * HOURS;
    }
    if (ms >= MINUTES) {
      minutes = Math.floor(ms / MINUTES);
      ms -= minutes * MINUTES;
    }
    let seconds = Math.round(ms / SECONDS);
    console.log(ms, hours, minutes, seconds);
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },
};
