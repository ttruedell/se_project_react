import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection() {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__header_text">Your Items</p>
        <button className="clothes-section__header_button">+ Add new</button>
      </div>
      <ul className=/*"cards__list"*/ "clothes-section__items">
        {defaultClothingItems
          //   .filter((item) => {
          //     return item.weather === weatherData.type;
          //   })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                // To-Do --> Pass as prop
                // onCardClick={handleCardClick}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
