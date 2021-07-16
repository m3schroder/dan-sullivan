import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import { CgMenuRound } from "react-icons/cg";

import Collapse from "./menuCollapse";
import SubmissionForm from "./submissionForm";

import "../assets/css/navbar.css";

const NavBar = ({ links, logo, onSelect, currentPage }) => {
  const [openSubmission, setOpenSubmission] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [containerHidden, setContainerHidden] = useState(false);

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
    return link.content ? link.content : <strong>{link.text}</strong>;
  };

  let containerStyle = {};
  window.addEventListener("resize", (e) => {
    setContainerHidden(!containerHidden);
    containerStyle = containerHidden
      ? { display: "none" }
      : { display: "block" };
  });
  return (
    <div className="nav-screen">
      {openMenu || openSubmission ? (
        <div className="nav-focus" onClick={() => closeAll()} />
      ) : null}
      <Navbar
        onSelect={() => closeAll()}
        style={containerStyle}
        className="navbar-dark nav-container"
        expand="xl"
        expanded={openMenu}
      >
        <SubmissionForm
          open={openSubmission}
          toggle={toggleSubmission}
          popUpId="submissionPopup"
        />
        <Navbar.Toggle onClick={() => toggleMenu()}>
          <CgMenuRound color="white" size="40px" />
        </Navbar.Toggle>
        <Nav.Link
          as={Link}
          eventKey={"Home"}
          onClick={() => {
            console.log(currentPage);
            onSelect("Home");
            closeAll();
          }}
          className="nav-link"
          to={"/"}
        >
          <img className="nav-logo" src={logo} alt="FutureSeed" />
        </Nav.Link>
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
          <FiMail color="white" size="40px" />
        </button>
      </Navbar>
    </div>
  );
};
export default NavBar;
