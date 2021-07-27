import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import { CgMenuRound } from "react-icons/cg";
import { BiPhone } from "react-icons/bi";

import Collapse from "./menuCollapse";
import SubmissionForm from "./submissionForm";

import "../assets/css/navbar.css";

const NavBar = ({ links, logo, onSelect, currentPage, style = {} }) => {
  const [openSubmission, setOpenSubmission] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const windowWidth = window.screen.width;
  const iconColor = "white";

  const toggleMenu = () => {
    if (openSubmission) {
      setOpenSubmission(false);
      setTimeout(() => setOpenMenu(true), 420);
    } else {
      setOpenMenu(!openMenu);
    }
  };
  const toggleSubmission = () => {
    if (openMenu) {
      setOpenMenu(false);
      setTimeout(() => setOpenSubmission(true), 420);
    } else {
      setOpenSubmission(!openSubmission);
    }
  };
  const closeAll = () => {
    setOpenSubmission(false);
    setOpenMenu(false);
  };
  const renderLink = (link) => {
    let rendered = link.content ? link.content : <strong>{link.text}</strong>;
    return rendered;
  };

  return (
    <div className="nav-screen">
      {openMenu || openSubmission ? (
        <div className="nav-focus" onClick={() => closeAll()} />
      ) : null}
      <Navbar
        onSelect={() => closeAll()}
        className="navbar-dark nav-container"
        expand="xl"
        expanded={openMenu}
      >
        <SubmissionForm
          open={openSubmission}
          errDropdown={windowWidth > 1350}
          toggle={toggleSubmission}
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
        <a className="phone-link show-mobile" href="tel:6159056292">
          <BiPhone color={iconColor} size="40px" />
        </a>
        <Navbar.Toggle onClick={() => toggleMenu()}>
          <CgMenuRound color={iconColor} size="40px" />
        </Navbar.Toggle>

        <Collapse
          currentPage={currentPage}
          onSelect={onSelect}
          links={links}
          renderLink={renderLink}
        />
        <button
          className="btn shadow-none"
          onClick={() => toggleSubmission()}
          aria-controls="emailPopUp"
          aria-expanded={openSubmission}
        >
          <FiMail color={iconColor} size="40px" />
        </button>
      </Navbar>
    </div>
  );
};
export default NavBar;
