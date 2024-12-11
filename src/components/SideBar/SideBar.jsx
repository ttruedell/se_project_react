// import avatar from "../../assets/avatar.png";
import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function SideBar({ onLogOutClick, changeProfileData }) {
  const currentUser = useContext(CurrentUserContext);

  const placeholderAvatar = currentUser?.name
    ? currentUser.name[0].toUpperCase()
    : "U";

  return (
    <div className="sidebar">
      {currentUser ? (
        <>
          {currentUser.avatar ? (
            <div className="sidebar__header">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="sidebar__avatar"
              />
              <p className="sidebar__username">{currentUser.name}</p>
            </div>
          ) : (
            <div className="sidebar__header">
              <div className="sidebar__avatar-placeholder">
                {placeholderAvatar}
              </div>
              <p className="sidebar__username">{currentUser.name}</p>
            </div>
          )}
          <span>
            <p className="sidebar__edit-profile" onClick={changeProfileData}>
              Change profile data
            </p>
            <p className="sidebar__logout" onClick={onLogOutClick}>
              Sign out
            </p>
          </span>
        </>
      ) : (
        <>
          <div className="sidebar__avatar-placeholder">?</div>
          <p className="sidebar__username">Guest</p>
        </>
      )}
    </div>
    // <div className="sidebar">
    //   <img src={avatar} alt="avatar" className="sidebar__avatar" />
    //   <p className="sidebar__username">Default username</p>
    // </div>
  );
}

export default SideBar;
