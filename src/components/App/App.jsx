import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
      <ModalWithForm buttonText="Add garment" title="New garment">
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageURL" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            name="imageURL"
            placeholder="Image URL"
          />
        </label>
        <fieldset htmlFor="" className="modal__form">
          <legend className="modal__legend">Select the weather type:</legend>
          <label
            htmlFor="hot"
            id="hot"
            className="modal__label modal__label_type_radio"
          >
            {" "}
            <input type="radio" className="modal__radio-btns" name="temp" /> Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              id="warm"
              className="modal__radio-btns"
              name="temp"
            />{" "}
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              id="cold"
              className="modal__radio-btns"
              name="temp"
            />{" "}
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
