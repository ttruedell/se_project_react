import React from "react";
import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, onAddItem, handleCloseModal }) => {
  // declare state for each input field
  const [name, setName] = useState("");
  const [imageUrl, setImageURL] = useState("");
  const [weather, setWeather] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened
  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageURL("");
      setWeather("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (name && imageUrl && weather) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [name, imageUrl, weather]);

  // create onChange handlers corresponding to each state variable
  const handleNameChange = (e) => setName(e.target.value);
  const handleImageURLChange = (e) => setImageURL(e.target.value);
  const handleWeatherChange = (e) => setWeather(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();

    onAddItem({
      name,
      imageUrl,
      weather,
    })
      .then(() => {
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Failed to add item:", err);
      });
  }

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      name="addGarmentForm"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          minLength="1"
          maxLength="20"
          required
        />
      </label>
      <label htmlFor="imageURL" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageURL"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleImageURLChange}
          minLength="1"
          required
        />
      </label>
      <fieldset htmlFor="" className="modal__form">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          {" "}
          <input
            type="radio"
            className="modal__radio-btns"
            id="hot"
            name="temp"
            value="hot"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="warm"
            className="modal__radio-btns"
            name="temp"
            value="warm"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="cold"
            className="modal__radio-btns"
            name="temp"
            value="cold"
            onChange={handleWeatherChange}
            checked={weather === "cold"}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
