import "./ConfirmDeleteModal.css";
import closeButton from "../../assets/Union2.svg";

function ConfirmDeleteModal({ activeModal, onClose, onDelete, card }) {
  const handleConfirmDelete = () => {
    onDelete(card);
    onClose();
  };

  const handleCancelConfirm = () => {
    onClose();
  };

  return (
    <div
      className={`modal ${activeModal === "delete-confirm" && "modal_opened"}`}
      onClick={onClose}
    >
      <div className="modal__content">
        <button
          onClick={onClose}
          className="modal__close modal__close_type_image"
        >
          <img src={closeButton} alt="close-btn" />
        </button>
        <div className="modal__delete-confirm">
          <p>Are you sure you want to delete this item?</p>
          <p>This action is irreversible.</p>
        </div>
        <div className="modal__buttons">
          <button
            className="modal__button_type_delete"
            onClick={handleConfirmDelete}
          >
            Yes, delete the item
          </button>
          <button
            className="modal__button_type_cancel"
            onClick={handleCancelConfirm}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
