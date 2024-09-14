import "./ModalWithForm.css";
import closeButton from "../../assets/Union.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  onClose,
  isOpen,
  onSubmit,
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
        <form /*action="submit"*/ onSubmit={onSubmit} className="modal__form">
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
