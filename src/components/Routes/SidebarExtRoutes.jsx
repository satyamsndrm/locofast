import React from "react";
import { Route, Switch } from "react-router-dom";

import Collection from "../SidebarExt/Collections";
import Sampling from "../SidebarExt/Sampling";
import Production from "../SidebarExt/Production";
import Inbox from "../SidebarExt/Inbox";
import Result from "../Result/Result";

import Home from "../Home/Home";
export default class SidebarRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/collection" component={Collection} />
        <Route path="/sampling" component={Sampling} />
        <Route path="/production" component={Production} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/collection/design/:id" component={Home} />
        <Route path="/result" component={Result} />
      </Switch>
    );
  }
}
