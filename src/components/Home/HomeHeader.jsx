import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import "./Home.scss";
import people from "../../assets/ic-people-outline.svg";

function NavTabs(props, match) {
  return (
    <div className="nav_tabs">
      <ul>
        <li>
          <NavLink
            to={"/collection/design/" + props.index}
            exact
            activeClassName="active"
          >
            Design Summary
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection/file" activeClassName="active">
            Files
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection/des_sum" activeClassName="active">
            Sampling Details
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default class HomeHeader extends React.Component {
  render() {
    return (
      <div className="top-content">
        <div className="row">
          <div className="left">
            <div className="breadcrumbs">
              Collections > Summer Collection 2019 >
            </div>
            <div className="title">
              {this.props.localeData.name}
              <span className="label">Draft</span>
            </div>
            <div className="upl_by">
              by {this.props.localeData.by}
              <span className="date">{this.props.localeData.date}</span>
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
            <li>
              <a to={"/collection/design/" + this.props.index} class="active">
                Design Summary
              </a>
            </li>
            <li>
              <a to="/collection/file">Files</a>
            </li>
            <li>
              <a to="/collection/des_sum">Sampling Details</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
