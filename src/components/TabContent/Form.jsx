import React from "react";
import "../Home/Home.scss";
import Design from "../../assets/Design_Design_Summary.png";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valueChange = this.valueChange.bind(this);
    this.state = {
      ...this.props.localeData
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    let keys = Object.keys(this.state);
    let hasError = false;
    keys.forEach(key => {
      if (this.state[key] === "") {
        alert(key + " cannot be left blank");
        hasError = true;
      }
    });
    if (hasError) {
      return false;
    } else {
      localStorage.setItem("Data", JSON.stringify(this.state));
      // alert("Submitted");
      // window.location.href = "localhost:3000/result";
      this.props.history.replace("/result");
    }
    return false;
  }
  valueChange(e) {
    e.preventDefault();
    let val = e.target.value;
    var id = e.target.id;
    if (val.length > 50) {
      alert("No More Characters Allowed");
    } else {
      if (id === "name") this.setState({ name: val });
      if (id === "id") this.setState({ id: val });
      if (id === "cat") this.setState({ cat1: val });
      if (id === "cat2") this.setState({ cat2: val });
    }
  }
  render() {
    return (
      <div className="main-content">
        <div className="tab-content">
          <div className="left">
            <div className="title">Cover Image</div>
            <div className="img-wrap">
              <img src={Design} alt="" srcset="" />
              <div className="bottom">
                <div className="content">Delete</div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="form-inputs">
                  <label>Design Name</label>
                  <input
                    type="text"
                    id="name"
                    value={this.state.name}
                    onChange={this.valueChange}
                  />
                  <div className="right_cnt">
                    {50 - this.state.name.length}/50
                  </div>
                </div>
                <div className="form-inputs">
                  <label>Design Id</label>
                  <input
                    type="text"
                    id="id"
                    value={this.state.id}
                    onChange={this.valueChange}
                  />
                  <div className="right_cnt">
                    {50 - this.state.id.length}/50
                  </div>
                </div>
                <div className="form-inputs">
                  <label>Design Category</label>
                  <div className="group-inputs">
                    <select id="cat" onChange={this.valueChange}>
                      <option value="Women">Women</option>
                      <option value="Men">Men</option>
                    </select>
                    <div class="height" />
                    <select id="cat2" onChange={this.valueChange}>
                      <option value="Wear 1">Wear 1</option>
                      <option value="Wear 2">wear 2</option>
                    </select>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
