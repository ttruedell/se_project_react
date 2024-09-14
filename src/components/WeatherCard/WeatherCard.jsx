import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { useContext, useMemo } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temp = weatherData?.temp?.[currentTemperatureUnit];
  const tempLetter = currentTemperatureUnit;

  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }
  // debugger;
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {/*weatherData.temp.F*/ temp} &deg; {tempLetter}
      </p>
      <img
        src={weatherOption?.url}
        alt={`WeatherCard showing ${
          weatherOption?.day ? "day" : "night"
        }time, ${weatherOption?.condition} weather.`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
