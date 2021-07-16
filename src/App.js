import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import logo from "./assets/images/logo-dan.png";

import "./App.css";
import createContactCard from "./utils/createContact";

class App extends Component {
  state = {
    currentPage: "Home",
  };

  handle = {
    pageChange: (page) => {
      this.setState({ currentPage: page });
    },
  };
  render() {
    const links = [
      { path: "/carpet", text: "Carpet Cleaning" }, // premade products
      { path: "/rug", text: "Area Rug Cleaning" }, // design, paint, print
      { path: "/upholstery", text: "Upholstery Cleaning" }, // discuss with jd
      { path: "/tile", text: "Tile Cleaning" }, // premade products
      { path: "/stain", text: "Stain Removal" }, // premade products
      { path: "/commercial", text: "Commercial Carpets" }, // premade products
    ];

    createContactCard();
    return (
      <>
        <NavBar
          links={links}
          logo={logo}
          onSelect={this.handle.pageChange}
          currentPage={this.state.currentPage}
        />
        <main className="container-fluid main-area">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/" />
            <Redirect from="/home" exact to="/" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
