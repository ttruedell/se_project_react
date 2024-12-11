import "./ModalWithForm.css";
// import handleUserModal from "../App/App";
import closeButton from "../../assets/Union.svg";

function ModalWithForm({
  children,
  buttonTextSubmit,
  buttonTextSwitch,
  title,
  name,
  onClose,
  isOpen,
  onSubmit,
  isSubmitDisabled,
  onSwitchModal,
}) {
  return (
    <div
      className={`modal modal_type_${name}  ${isOpen && "modal_opened"}`}
      onClick={onClose}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} className="modal__close">
          <img src={closeButton} alt="close-btn" />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div>
            <button
              className="modal__submit"
              type="submit"
              disabled={isSubmitDisabled}
            >
              {buttonTextSubmit}
            </button>
            {
              <button
                className="modal__switch-modal"
                type="button"
                onClick={onSwitchModal}
              >
                {buttonTextSwitch}
              </button>
            }
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
