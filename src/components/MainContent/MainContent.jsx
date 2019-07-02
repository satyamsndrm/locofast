import React from "react";
import "./MainContent.scss";

import SidebarExtRoutes from "../Routes/SidebarExtRoutes";
export default class MainContent extends React.Component {
  render() {
    return (
      <div className="right-content">
        <SidebarExtRoutes />
      </div>
    );
  }
}
