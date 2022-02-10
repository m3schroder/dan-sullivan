import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbar";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import Services from "./pages/services";
import MediaLinks from "./components/mediaLinks";
import ScrollButton from "./components/ScrollToTop";

class App extends Component {
  state = {
    currentPage: "Home",
    formOpen: false,
  };

  handle = {
    onSelect: (name) => {
      console.log(name);
      this.setState({ currentPage: name });
    },
    onToggle: (tog = null) => {
      if (tog !== null) this.setState({ formOpen: tog });
      else this.setState({ formOpen: !this.state.formOpen });
    },
  };

  render() {
    const links = [
      { path: "/", text: "Home" },
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
            <Route path="/services/:service" exact component={Services} />
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
        <ScrollButton />
      </>
    );
  }
}

export default App;
