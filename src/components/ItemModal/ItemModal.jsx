import "./ItemModal.css";
import closeButton from "../../assets/Union.svg";

function ItemModal({ activeModal, handleCardClick, handleCloseClick, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={handleCloseClick} className="modal__close">
          <img src={closeButton} alt="close-btn" />
        </button>
        <img src={card.link} alt="" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather:{card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
