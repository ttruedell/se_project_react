import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
// import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Header({
  handleAddClick,
  handleSignUpClick,
  handleLoginClick,
  weatherData,
}) {
  const currentUser = useContext(CurrentUserContext);

  const placeholderAvatar = currentUser?.name
    ? currentUser.name[0].toUpperCase()
    : "U";

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo-image"></img>
      </Link>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        className="header__add-clothes-btn"
        type="button"
      >
        + Add clothes
      </button>

      {currentUser ? (
        <Link to="/profile" className="header__link">
          <div className="header__user-container">
            <p className="header__username">{currentUser.name}</p>
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="header__avatar"
              />
            ) : (
              <div className="header__avatar-placeholder">
                {placeholderAvatar}
              </div>
            )}
          </div>
        </Link>
      ) : (
        <div className="header__auth-buttons">
          <button
            onClick={handleSignUpClick}
            className="header__sign-up-btn"
            type="button"
          >
            Sign Up
          </button>
          <button
            onClick={handleLoginClick}
            className="header__login-btn"
            type="button"
          >
            Login
          </button>
          {/* <Link to="/profile" className="header__link">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
      </Link> */}
        </div>
      )}
    </header>
  );
}
export default Header;
