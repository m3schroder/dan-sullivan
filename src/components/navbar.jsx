import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import { CgMenuRound } from "react-icons/cg";
import { BiPhone } from "react-icons/bi";
import { logo } from "../assets/images/index";

import Collapse from "./menuCollapse";
import SubmissionForm from "./submissionForm";
import PhonePopup from "./phonePopup";

import "../assets/css/navbar.css";

const NavBar = ({ links, onSelect, currentPage, style = {} }) => {
  //0 is phone  1 is menu   2 is the form
  const [open, setOpen] = useState([false, false, false]);
  const windowWidth = window.screen.width;
  const anyOpen = open.some((x) => x === true);

  //Make toToggle an index 0-2
  const toggle = (toToggle) => {
    let temp = [false, false, false];
    for (let x = 0; x < open.length; x++) {
      if (x === toToggle) {
        temp[x] = !open[x];
      }
    }
    setOpen(temp);
  };
  const closeAll = () => {
    setOpen([false, false, false]);
  };
  const renderLink = (link) => {
    let rendered = link.content ? link.content : <p>{link.text}</p>;
    return rendered;
  };

  return (
    <div className="nav-screen">
      {/* Controls background used to close popups */}
      {anyOpen ? (
        <div className="nav-focus" onClick={() => closeAll()} />
      ) : null}
      <Navbar
        onSelect={() => closeAll()}
        className="navbar-dark nav-container"
        expand="xl"
        expanded={open[1]}
      >
        {/* Actual phone popup */}
        <PhonePopup open={open[0]} toggle={toggle} popUpId="phonePopup" />
        <SubmissionForm
          open={open[2]}
          errDropdown={windowWidth > 1350}
          toggle={toggle}
          popUpId="submissionPopup"
        />
        <Nav.Link
          as={Link}
          eventKey={"Home"}
          onClick={() => {
            console.log(currentPage);
            onSelect("Home");
            closeAll();
          }}
          className="nav-logo hide-mobile"
          to={"/"}
        >
          <img src={logo} alt="awesome logo"></img>
        </Nav.Link>
        {/* Toggle phone when visible */}
        <BiPhone className="show-mobile icon" onClick={() => toggle(0)} />
        {/* Toggle Menu */}
        <Navbar.Toggle className="nav-logo" onClick={() => toggle(1)}>
          <CgMenuRound className="icon" />
        </Navbar.Toggle>
        <Collapse
          currentPage={currentPage}
          onSelect={onSelect}
          links={links}
          renderLink={renderLink}
        />
        {/* Toggle Form */}
        <div style={{ margin: "5px" }}>
          <FiMail
            className="icon shadow-none"
            onClick={() => toggle(2)}
            aria-controls="emailPopUp"
            aria-expanded={open[2]}
          />
        </div>
      </Navbar>
    </div>
  );
};
export default NavBar;
