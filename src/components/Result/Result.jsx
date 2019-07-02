import React from "react";
import "./Result.scss";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.data_show = JSON.parse(localStorage.getItem("Data"));
  }
  render() {
    let keys = Object.keys(this.data_show);
    let toShow = keys.map(val => {
      return (
        <tr>
          <td>{val}</td>
          <td>{this.data_show[val]}</td>
        </tr>
      );
    });
    return (
      <div className="result">
        <div className="title">Here is the result</div>
        <table>{toShow}</table>
      </div>
    );
  }
}
