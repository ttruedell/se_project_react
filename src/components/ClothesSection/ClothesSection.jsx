import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection() {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p>Your Items</p>
        <button>+ Add New</button>
      </div>
      <ul className="cards__list">
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
