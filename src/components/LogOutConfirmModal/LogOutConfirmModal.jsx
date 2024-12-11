import { useNavigate } from "react-router-dom";
import "./LogOutConfirmModal.css";
import closeButton from "../../assets/Union.svg";

function LogOutConfirmModal({ activeModal, onClose, handleLogOut }) {
  const navigate = useNavigate();

  const handleConfirmLogOut = () => {
    handleLogOut();
    navigate("/");
  };
  const handleCancelConfirm = () => {
    onClose();
  };

  return (
    <div
      className={`modal ${activeModal === "log-out-confirm" && "modal_opened"}`}
      onClick={onClose}
    >
      <div className="modal__content modal__content_type_log-out-confirm">
        <button
          onClick={onClose}
          className="modal__close modal__close_type_log-out-confirm"
        >
          <img src={closeButton} alt="close-btn" />
        </button>

        <p className="modal__log-out-confirm-text">
          Are you sure you want to sign out?
        </p>

        <div className="modal__buttons">
          <button
            className="modal__button_type_log-out"
            onClick={handleConfirmLogOut}
          >
            Yes, sign me out
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

export default LogOutConfirmModal;
