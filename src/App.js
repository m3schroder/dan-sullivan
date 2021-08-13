import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbar";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import "./App.css";
import About from "./pages/about";
import Carpet from "./pages/carpet";
import Rug from "./pages/rug";
import Upholstery from "./pages/upholstery";
import Tile from "./pages/tile";
import Stain from "./pages/stain";
import Commercial from "./pages/commercial";

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
            <Route path="/about" exact component={About} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/carpet" exact component={Carpet} />
            <Route path="/rug" exact component={Rug} />
            <Route path="/upholstery" exact component={Upholstery} />
            <Route path="/tile" exact component={Tile} />
            <Route path="/stain" exact component={Stain} />
            <Route path="/commercial" exact component={Commercial} />
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
