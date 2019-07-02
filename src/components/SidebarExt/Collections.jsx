import React from "react";
import "./SidebarExt.scss";

import data from "../../Data/data";

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ind) {
    // alert(ind);
    this.props.history.push("/collection/design/" + ind);
  }
  render() {
    return (
      <div className="item-list">
        <div
          className="item"
          onClick={() => this.handleClick(this.props.index)}
        >
          {this.props.val.name}
          <span>Draft</span>
        </div>
      </div>
    );
  }
}

function NavItemList(props) {
  let navItems = data["collections"].map((val, index) => {
    return <NavItem val={val} index={index} {...props} />;
  });
  return (
    <div className="wrapper">
      <div className="title">{props.title}</div>
      {navItems}
    </div>
  );
}
export default class Home extends React.Component {
  render() {
    return (
      <div className="sidebar-ext">
        <NavItemList {...this.props} title="All Design" />
      </div>
    );
  }
}
