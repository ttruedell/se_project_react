import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems, onCardClick, handleAddClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          handleAddClick={handleAddClick}
        />
      </section>
    </div>
  );
}

export default Profile;
