import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import { ApiKey, coordinates } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import LogOutConfirmModal from "../LogOutConfirmModal/LogOutConfirmModal";
import {
  getItems,
  addItem,
  deleteItem,
  updateProfile,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import { signUp, signIn, getCurrentUser } from "../../utils/auth";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: "", C: "" },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleProfileDataChangeClick = () => {
    setActiveModal("change-profile");
  };
  const handleLogOutClick = () => {
    setActiveModal("log-out-confirm");
  };

  const closeActiveModal = (event) => {
    if (!event) {
      return setActiveModal("");
    }

    if (handleModalClose(event)) {
      setActiveModal("");
    }
  };

  const handleModalClose = (event) => {
    if (event.type === "keydown" && event.key === "Escape") {
      closeActiveModal();
    } else if (event.type === "click") {
      if (
        (!event.target.closest(".modal__content") &&
          event.target.classList.contains("modal")) ||
        event.target.closest(".modal__close")
      ) {
        closeActiveModal();
      }
    }
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteClick = (card) => {
    setActiveModal("delete-confirm");
    setSelectedCard(card);
  };

  const handleAddItemSubmit = (values) => {
    const token = localStorage.getItem("jwt");

    return addItem(values, token)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        closeActiveModal();
      })
      .catch((err) => console.error(err));
  };

  const handleProfileUpdate = (updatedData) => {
    const token = localStorage.getItem("jwt");

    updateProfile(updatedData, token)
      .then((newUser) => {
        setCurrentUser(newUser);
        closeActiveModal();
      })
      .catch((err) => console.error("Profile Update Failed:", err));
  };
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setLoggedIn(false);
    closeActiveModal();
  };

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  const handleUserModal = () => {
    if (activeModal === "register") {
      closeActiveModal();
      setActiveModal("login");
    }
    if (activeModal === "login") {
      closeActiveModal();
      setActiveModal("register");
    }
  };

  const checkToken = () => {
    const token = localStorage.getItem("jwt");

    if (token) {
      getCurrentUser(token)
        .then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.error("Token validation failed:", err);
          localStorage.removeItem("jwt");
        });
    }
  };

  const handleLogin = ({ email, password }) => {
    signIn({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        closeActiveModal();
        checkToken();
      })
      .catch((err) => console.error("Login failed:", err));
  };

  const handleRegister = (values) => {
    signUp(values)
      .then(() => handleLogin(values))
      .catch((err) => console.error("Registration failed:", err));
  };

  const handleDeleteItem = (card) => {
    const token = localStorage.getItem("jwt");

    deleteItem(card._id, token)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== card._id)
        );
        closeActiveModal();
      })
      .catch((err) => console.error("Delete failed:", err));
  };

  const handleCardLike = ({ _id: id, likes }) => {
    const token = localStorage.getItem("jwt");
    const isLiked = likes.some((like) => like === currentUser._id);

    const likeRequest = !isLiked
      ? addCardLike(id, token)
      : removeCardLike(id, token);

    likeRequest
      .then((updatedCard) => {
        setClothingItems((items) =>
          items.map((item) => (item._id === id ? updatedCard : item))
        );
      })
      .catch((err) => console.error("Like operation failed:", err));
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    getWeather(coordinates, ApiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              handleSignUpClick={handleSignUpClick}
              handleLoginClick={handleLoginClick}
              weatherData={weatherData}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                  />
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    component={Profile}
                    clothingItems={clothingItems}
                    onCardClick={handleCardClick}
                    handleAddClick={handleAddClick}
                    loggedIn={loggedIn}
                    changeProfileData={handleProfileDataChangeClick}
                    onLogOutClick={handleLogOutClick}
                    onCardLike={handleCardLike}
                  />
                }
              ></Route>
            </Routes>

            <Footer />
          </div>
          <AddItemModal
            handleCloseModal={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            onAddItem={handleAddItemSubmit}
          />
          <LoginModal
            handleCloseModal={closeActiveModal}
            isOpen={activeModal === "login"}
            onLogin={handleLogin}
            validateEmail={validateEmail}
            handleUserModal={handleUserModal}
          />
          <RegisterModal
            handleCloseModal={closeActiveModal}
            isOpen={activeModal === "register"}
            onRegister={handleRegister}
            validateEmail={validateEmail}
            handleUserModal={handleUserModal}
          />
          <EditProfileModal
            handleCloseModal={closeActiveModal}
            isOpen={activeModal === "change-profile"}
            currentUser={currentUser}
            changeProfileData={handleProfileUpdate}
          />
          <LogOutConfirmModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            handleLogOut={handleLogOut}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onDelete={handleDeleteClick}
            onClose={closeActiveModal}
          />
          <ConfirmDeleteModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            card={selectedCard}
            onDelete={handleDeleteItem}
            // {() => {
            //   deleteItem(selectedCard._id)
            //     .then(() => {
            //       setClothingItems((prevItems) =>
            //         prevItems.filter((item) => item._id !== selectedCard._id)
            //       );
            //       closeActiveModal();
            //     })
            //     .catch((err) => console.error(err));
            // }}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
