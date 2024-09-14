export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  // console.log(result.temp);
  result.type = getWeatherTypeF(
    result.temp.F
  ) /*|| getWeatherTypeC(result.temp.C)*/;
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  // console.log(result);
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherTypeF = (temperature) => {
  // console.log(temperature);
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66 && temperature < 86) {
    return "warm";
  } else {
    return "cold";
  }
};

// const getWeatherTypeC = (temperature) => {
//   console.log(temperature);
//   if (temperature > 30) {
//     return "hot";
//   } else if (temperature >= 18.333 && temperature < 30) {
//     return "warm";
//   } else {
//     return "cold";
//   }
// };
