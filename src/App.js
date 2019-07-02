import React from "react";
// import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// import SidebarExtRoutes from "./components/Routes/SidebarExtRoutes";
// import Home from "./components/Home/Home";
import MainContent from "./components/MainContent/MainContent";
import data from "./Data/data";
function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div>
        <Header />
        <Sidebar />
        <MainContent detail={data["collections"][0]} />
        {/* <SidebarExtRoutes /> */}
      </div>
    </Router>
  );
}

export default App;
