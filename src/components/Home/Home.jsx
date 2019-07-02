import React from "react";
import "./Home.scss";

import people from "../../assets/ic-people-outline.svg";
import Form from "../TabContent/Form";
import FileComponent from "../TabContent/File";
import DesignSummary from "../TabContent/DesignSummary";

import data from "../../Data/data";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.index = this.props.match.params.id;
    this.localeData = data["collections"][this.index];
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      component: <Form localeData={this.localeData} {...this.props} />
    };
  }
  handleClick(e) {
    e.preventDefault();
    // alert(e.target.id);
    let id = e.target.id;
    switch (id) {
      case "form":
        this.setState({
          component: <Form localeData={this.localeData} {...this.props} />
        });
        break;
      case "file":
        this.setState({ component: <FileComponent /> });
        break;
      case "des_sum":
        this.setState({ component: <DesignSummary /> });
        break;
    }
  }
  render() {
    return (
      <div className="home">
        <div className="top-content">
          <div className="row">
            <div className="left">
              <div className="breadcrumbs">
                Collections > Summer Collection 2019 >
              </div>
              <div className="title">
                {this.localeData.name}
                <span className="label">Draft</span>
              </div>
              <div className="upl_by">
                by {this.localeData.by}
                <span className="date">{this.localeData.date}</span>
              </div>
            </div>
            <div className="right">
              <div className="persons">
                <div className="box">DW</div>
                <div className="box">KK</div>
                <div className="box">3+</div>
                <div className="people_icon">
                  <img src={people} alt="people" srcset="" />
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />

          <div className="nav_tabs">
            <ul>
              <li class="navTabs">
                <a id={"form"} onClick={this.handleClick} class="active">
                  Design Summary
                </a>
              </li>
              <li>
                <a id="file" onClick={this.handleClick}>
                  Files
                </a>
              </li>
              <li>
                <a id="des_sum" onClick={this.handleClick}>
                  Sampling Details
                </a>
              </li>
            </ul>
          </div>
        </div>
        {this.state.component}
      </div>
    );
  }
}
