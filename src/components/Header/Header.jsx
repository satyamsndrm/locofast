import React from "react";

import notif from "../../assets/ic_nav_messages.svg";
import "./Header.scss";
export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="left">
          <div className="header__title">Zara Retail Limited</div>
        </div>
        <div className="middle">
          <div class="search__container">
            <input
              class="search__input"
              type="text"
              placeholder="Search designs or Collections"
            />
          </div>
        </div>
        <div className="right">
          <img src={notif} alt="Notif" />'
        </div>
      </div>
    );
  }
}
