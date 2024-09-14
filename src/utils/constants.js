export const weatherOptions = [
  ////Day conditoins
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/WeatherCard/Day/Clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/WeatherCard/Day/Cloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/WeatherCard/Day/Fog.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/WeatherCard/Day/Rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/WeatherCard/Day/Snow.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "storm",
    url: new URL("../assets/WeatherCard/Day/Storm.svg", import.meta.url).href,
  },
  //////Night conditions
  {
    day: false,
    condition: "clear",
    url: new URL(
      "../assets/WeatherCard/Night/Clear(Night).svg",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL(
      "../assets/WeatherCard/Night/Cloudy(Night).svg",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/WeatherCard/Night/Fog(Night).svg", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/WeatherCard/Night/Rain(Night).svg", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/WeatherCard/Night/Snow(Night).svg", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "storm",
    url: new URL(
      "../assets/WeatherCard/Night/Storm(Night).svg",
      import.meta.url
    ).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/WeatherCard/Day/Sunny(Blank)", import.meta.url)
      .href,
  },
  night: {
    url: new URL(
      "../assets/WeatherCard/Night/Night(Blank).svg",
      import.meta.url
    ).href,
  },
};

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const coordinates = {
  // Savannah
  latitude: 32.0809,
  longitude: -81.0912,
  // Rancho Palos Verdes
  latitude: 33.74446,
  longitude: -118.38702,
  // London
  // lattitude: 51.509865,
  // longitude: -0.118092,
};

export const ApiKey = "957cc880bbd931e0e77b5f1f67138e24";
