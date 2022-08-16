export default () => {
  const getHourOfDay = function () {
    let today = new Date;
    let hours = today.getHours();
    return hours;
  };

  const isDark = function () {
    let hour = getHourOfDay();
    return !((9 < hour) && (hour < 19));
  };
  
  const isMorning = function () {
    let hour = getHourOfDay();
    return ((5 <= hour) && (hour < 12));
  };
  
  const isAfternoon = function () {
    let hour = getHourOfDay();
    return ((12 <= hour) && (hour < 18));
  };
  
  const isEvening = function () {
    let hour = getHourOfDay();
    return (((0 <= hour) && (hour < 5)) || ((18 <= hour) && (hour < 24)));
  };

  const getTimeOfDay = function () {
    if (isMorning()) {
      return "morning";
    } else if (isAfternoon()) {
      return "afternoon";
    } else {
      return "evening";
    }
  };

  return { 
    getHourOfDay, 
    isDark, 
    isMorning, 
    isAfternoon, 
    isEvening,
    getTimeOfDay
  };
};

/*
const getHourOfDay = function () {
  let today = new Date;
  let hours = today.getHours();
  console.log("BUENO???")
  return hours;
};

const isDark = function () {
  return !(9 < getHourOfDay() < 19);
};

const isMorning = function () {
  return (5 <= getHourOfDay() < 12);
};

const isAfternoon = function () {
  return (12 <= getHourOfDay() < 18);
};

const isEvening = function () {
  return ((0 <= getHourOfDay() < 5) || (18 <= getHourOfDay() < 24));
};

export {getHourOfDay, isDark, isMorning, isAfternoon, isEvening};

*/