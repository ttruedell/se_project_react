import "./ConfirmDeleteModal.css";
import closeButton from "../../assets/Union.svg";

function ConfirmDeleteModal({ activeModal, onClose, onDelete, card }) {
  const handleConfirmDelete = () => {
    onDelete(card);
  };

  const handleCancelConfirm = () => {
    onClose();
  };

  return (
    <div
      className={`modal ${activeModal === "delete-confirm" && "modal_opened"}`}
      onClick={onClose}
    >
      <div className="modal__content modal__content_type_sdelete-confirm">
        <button
          onClick={onClose}
          className="modal__close modal__close_type_delete-confirm"
        >
          <img src={closeButton} alt="close-btn" />
        </button>

        <p className="modal__delete-confirm-text">
          Are you sure you want to delete this item?
        </p>
        <p className="modal__delete-confirm-text">
          This action is irreversible.
        </p>

        <div className="modal__buttons">
          <button
            className="modal__button_type_delete"
            onClick={handleConfirmDelete}
          >
            Yes, delete item
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
