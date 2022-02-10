import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbar";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import Carpet from "./pages/carpet";
import Rug from "./pages/rug";
import Upholstery from "./pages/upholstery";
import Tile from "./pages/tile";
import Stain from "./pages/stain";
import Commercial from "./pages/commercial";
import Services from "./pages/services";
import MediaLinks from "./components/mediaLinks";

class App extends Component {
  state = {
    currentPage: "Home",
    formOpen: false,
  };

  handle = {
    onSelect: (path) => {
      console.log("Selected");
      this.setState({ currentPage: path });
    },
    onToggle: (tog = null) => {
      if (tog !== null) this.setState({ formOpen: tog });
      else this.setState({ formOpen: !this.state.formOpen });
    },
  };

  render() {
    const links = [
      { path: "/", text: "Home" },
      // { path: "/carpet", text: "Carpet Cleaning", submenu: true },
      // { path: "/rug", text: "Area Rug Cleaning", submenu: true },
      // { path: "/upholstery", text: "Upholstery Cleaning", submenu: true },
      // { path: "/tile", text: "Tile Cleaning", submenu: true },
      // { path: "/stain", text: "Stain Removal", submenu: true },
      // {
      //   path: "/commercial",
      //   text: "Commercial Carpets",
      //   submenu: true,
      // },
      { path: "/about", text: "About" },
      { path: "/gallery", text: "Gallery" },
      { path: "/services", text: "Services" },
    ];

    return (
      <>
        <NavBar
          links={links}
          onSelect={this.handle.onSelect}
          onToggle={this.handle.onToggle}
          currentPage={this.state.currentPage}
          formOpen={this.state.formOpen}
        />
        <main className="container-fluid main-area">
          <Switch>
            <Route path="/" exact>
              <Home toggleForm={this.handle.onToggle} />
            </Route>
            <Route path="/about" exact>
              <About toggleForm={this.handle.onToggle} />
            </Route>
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/carpet" exact component={Carpet} />
            <Route path="/rug" exact component={Rug} />
            <Route path="/upholstery" exact component={Upholstery} />
            <Route path="/tile" exact component={Tile} />
            <Route path="/stain" exact component={Stain} />
            <Route path="/commercial" exact component={Commercial} />
            <Route path="/services" exact component={Services} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/" />
            <Redirect from="/home" exact to="/" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <footer className="main-footer">
          <MediaLinks />
        </footer>
      </>
    );
  }
}

export default App;
