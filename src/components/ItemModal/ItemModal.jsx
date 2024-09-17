import "./ItemModal.css";
import closeButton from "../../assets/Union2.svg";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div
      className={`modal ${activeModal === "preview" && "modal_opened"}`}
      onClick={onClose}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          className="modal__close modal__close_type_image"
        >
          <img src={closeButton} alt="close-btn" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__delete-button">Delete item</p>
          {/* <p className="modal__weather">Weather: {card.weather}</p> */}
        </div>
        <p className="modal__weather">Weather: {card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
