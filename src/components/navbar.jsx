import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import { CgMenuRound } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { BiPhone } from "react-icons/bi";
import { logo } from "../assets/images/index";

import Collapse from "./menuCollapse";
import SubmissionForm from "./submissionForm";
import PhonePopup from "./phonePopup";

import "../assets/css/navbar.css";

const NavBar = ({
  links,
  onSelect,
  submenu,
  toggleSubmenu,
  currentPage,
  style = {},
}) => {
  //0 is phone  1 is menu   2 is the form
  const [open, setOpen] = useState([false, false, false]);
  const [fade, setFade] = useState("");
  const anyOpen = open.some((x) => x === true);

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
        <Navbar.Toggle
          className="nav-logo"
          onClick={() => {
            setFade("fadeOut");
            setTimeout(() => {
              toggle(1);
              setFade("fadeIn");
            }, 80);
          }}
        >
          {open[1] ? (
            <IoMdClose className={fade + " icon"} />
          ) : (
            <CgMenuRound className={fade + " icon"} />
          )}
        </Navbar.Toggle>
        <Collapse
          currentPage={currentPage}
          submenu={submenu}
          toggleSubmenu={toggleSubmenu}
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
