import "./ConfirmDeleteModal.css";
import closeButton from "../../assets/Union2.svg";

function ConfirmDeleteModal({ activeModal, onClose, onDelete }) {
  const handleConfirmDelete = () => {
    onDelete();
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
        <div>
          <p>Are you sure you want to delete this item?</p>
          <p>This action is irreversible.</p>
          <button onClick={handleConfirmDelete}>Yes, delete the item</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
