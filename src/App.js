import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbar";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import "./App.css";

class App extends Component {
  state = {
    currentPage: "Home",
  };

  handle = {
    onSelect: (path) => {
      console.log("Selected");
      this.setState({ currentPage: path });
    },
  };

  render() {
    const links = [
      { path: "/", text: "Home" },
      { path: "/about", text: "About Us" },
      { path: "/gallery", text: "Gallery" },
      { path: "/carpet", text: "Carpet Cleaning", submenu: true },
      { path: "/rug", text: "Area Rug Cleaning", submenu: true },
      { path: "/upholstery", text: "Upholstery Cleaning", submenu: true },
      { path: "/tile", text: "Tile Cleaning", submenu: true },
      { path: "/stain", text: "Stain Removal", submenu: true },
      {
        path: "/commercial",
        text: "Commercial Carpets",
        submenu: true,
      },
    ];

    return (
      <>
        <NavBar
          links={links}
          onSelect={this.handle.onSelect}
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
