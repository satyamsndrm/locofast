import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

import collections from "../../assets/ic_nav_collections.svg";
import sampling from "../../assets/ic_nav_sampling.svg";
import production from "../../assets/ic_nav_production.svg";
import messages from "../../assets/ic_nav_messages.svg";
import account from "../../assets/ic_nav_account.svg";

export default class Header extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__title">
          <span className="up">LOCO</span>
          <span className="down">FAST</span>
        </div>
        <div className="sidebar__nav up">
          <ul>
            <li>
              <NavLink to="/collection" activeClassName="active_sidebar">
                <img src={collections} />
                <b> Collections</b>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sampling" activeClassName="active_sidebar">
                <img src={sampling} />
                <b> Sampling</b>
              </NavLink>
            </li>
            <li>
              <NavLink to="/production" activeClassName="active_sidebar">
                <img src={production} />
                <b> production</b>
              </NavLink>
            </li>
            <li>
              <NavLink to="/inbox" activeClassName="active_sidebar">
                <img src={messages} />
                <b> inbox</b>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar__nav down">
          <ul>
            <li>
              <img src={account} />
              <b> account</b>
            </li>
            <li>
              <img src={sampling} />
              <b> settings</b>
            </li>
            <li className="logout">
              <b> Logout</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
