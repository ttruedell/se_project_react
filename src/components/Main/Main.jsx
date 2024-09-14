import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { useContext, useMemo } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, handleCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  // console.log(currentTemperatureUnit);

  const temp = weatherData?.temp?.[currentTemperatureUnit];
  const tempLetter = currentTemperatureUnit;

  // const getWeatherType = useMemo(() => {
  //   if (temp > 86) {
  //     return "hot";
  //   } else if (temp >= 66 && temp < 86) {
  //     return "warm";
  //   } else {
  //     return "cold";
  //   }
  // }, [weatherData]);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {/*weatherData.temp.C*/ temp}° {tempLetter} / You may want to
          wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
