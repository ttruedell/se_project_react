// import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ clothingItems, onCardClick, handleAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__header_text">Your Items</p>
        <button
          className="clothes-section__header_button"
          onClick={handleAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {
          /*defaultClothingItems*/ clothingItems
            //   .filter((item) => {
            //     return item.weather === weatherData.type;
            //   })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            })
        }
      </ul>
    </div>
  );
}

export default ClothesSection;
