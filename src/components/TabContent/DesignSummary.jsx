import React from "react";

import "../Home/Home.scss";
export default class DesignSummary extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    alert("Hello");
  }
  render() {
    return <div className="main-content">This is Design Sumamary</div>;
  }
}
