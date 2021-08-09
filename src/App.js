import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbar";
// import Splash from "./pages/splash";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

import "./App.css";

class App extends Component {
  state = {
    currentPage: "Home",
    splash: true,
  };

  handle = {
    pageChange: (page) => {
      this.setState({ currentPage: page });
    },
  };
  render() {
    const links = [
      { path: "/", text: "Home", style: "show-mobile" }, // premade products
      { path: "/about", text: "About Us" },
      { path: "/gallery", text: "Gallery" },
      { path: "/carpet", text: "Carpet Cleaning", service: true }, // premade products
      { path: "/rug", text: "Area Rug Cleaning", service: true }, // design, paint, print
      { path: "/upholstery", text: "Upholstery Cleaning", service: true }, // discuss with jd
      { path: "/tile", text: "Tile Cleaning", service: true }, // premade products
      { path: "/stain", text: "Stain Removal", service: true }, // premade products
      {
        path: "/commercial",
        text: "Commercial Carpets",
        service: true,
      }, // premade products
    ];

    return (
      <>
        <NavBar
          links={links}
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
