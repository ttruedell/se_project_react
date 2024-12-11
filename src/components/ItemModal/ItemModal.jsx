import "./ItemModal.css";
import closeButton from "../../assets/Union2.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, onDelete, card }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card?.owner === currentUser?._id;
  // const itemDeleteButtonClassName = `modal__delete-button ${
  //   isOwn ? "" : "modal__delete-button_hidden"
  // }`;

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(card);
  };

  return (
    <div
      className={`modal ${activeModal === "preview" && "modal_opened"}`}
      onClick={onClose}
    >
      <div
        className="modal__content modal__content_type_image"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="modal__close modal__close_type_image"
        >
          <img src={closeButton} alt="close-btn" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          {isOwn && (
            <button
              className="modal__delete-button"
              onClick={handleDeleteClick}
            >
              Delete item
            </button>
          )}
        </div>
        <p className="modal__weather">Weather: {card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
