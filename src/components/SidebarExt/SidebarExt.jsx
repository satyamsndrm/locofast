import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import "./SidebarExt.scss";

import data from "../../Data/data";
function NavItem(props) {
  return (
    <div className="wrapper">
      <div className="title">{props.title}</div>
      <div className="item-list">
        <div className="item">
          GYPSY DRESS High Low Corset Purple Boho Dress long
          <span>Draft</span>
        </div>
      </div>
    </div>
  );
}
export default class Home extends React.Component {
  render() {
    let navItems = data["collections"].map((val, index) => {
      return <NavItem details={val} title="All Designs" />;
    });
    return <div className="sidebar-ext">{navItems}</div>;
  }
}
