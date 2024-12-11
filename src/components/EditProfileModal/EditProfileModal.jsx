// import React from "react";
import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({
  isOpen,
  handleCloseModal,
  changeProfileData,
  currentUser,
}) => {
  // declare state for each input field
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // use a useEffect hook to apply the current user's name and avatar url values
  // to the input field state when the modal is opened
  useEffect(() => {
    if (isOpen && currentUser) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [isOpen, currentUser]);

  useEffect(() => {
    if (name && avatar) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [name, avatar]);

  // create onChange handlers corresponding to each state variable
  const handleNameChange = (e) => setName(e.target.value);
  const handleAvatarChange = (e) => setAvatar(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    changeProfileData({ name, avatar });
  }

  return (
    <ModalWithForm
      buttonTextSubmit="Save changes"
      title="Change profile data"
      name="ProfileDataForm"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="name"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="avatar-url" className="modal__label">
        Password{" "}
        <input
          type="url"
          className="modal__input"
          id="avatar-url"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarChange}
          minLength="1"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
