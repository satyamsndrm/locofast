import React from "react";
import "./SidebarExt.scss";

function NavItem(props) {
  return (
    <div className="wrapper">
      <div className="title">{props.title}</div>
      <div className="content">{props.description}</div>
    </div>
  );
}
export default class Home extends React.Component {
  render() {
    return (
      <div className="sidebar-ext">
        <NavItem description="This is Production page" title="Production" />
      </div>
    );
  }
}
