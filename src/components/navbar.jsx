import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import { CgMenuRound } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { BiPhone } from "react-icons/bi";
// import { logo } from "../assets/images/index";

import Collapse from "./menuCollapse";
import SubmissionForm from "./submissionForm";
import PhonePopup from "./phonePopup";

import "../assets/scss/navbar.scss";
import "../assets/scss/abstracts/animation.scss";

const NavBar = ({ links, onSelect, currentPage, onToggle, formOpen }) => {
  //0 is phone  1 is menu   2 is the form
  const [open, setOpen] = useState([false, false, formOpen]);
  const [menuAnimation, setmenuAnimation] = useState("");
  const [phoneAnimation, setPhoneAnimation] = useState("");
  const [formAnimation, setFormAnimation] = useState("");
  const anyOpen = open.some((x) => x === true) || formOpen;

  //Animation handling
  useEffect(() => {
    setTimeout(() => {
      setFormAnimation("");
      setPhoneAnimation("");
    }, 200);
    setTimeout(() => {
      setmenuAnimation("");
    }, 350);
  }, [formAnimation, phoneAnimation, menuAnimation]);

  const popups = {
    toggle: (toToggle) => {
      let temp = [false, false, false];
      for (let x = 0; x < open.length; x++) {
        if (x === toToggle) {
          temp[x] = !open[x];
        }
      }
      onToggle(temp[2]);
      setOpen(temp);
      setTimeout(() => {}, 500);
    },
    closeAll: () => {
      setOpen([false, false, false]);
      setTimeout(() => {}, 500);
    },
  };

  const renderLink = (link) => {
    let rendered = link.content ? link.content : <p>{link.text}</p>;
    return rendered;
  };

  return (
    <div id="nav-screen">
      {/* Controls background used to close popups */}
      {anyOpen ? (
        <div
          className="nav-focus"
          onClick={() => {
            popups.closeAll();
            onToggle(false);
          }}
        />
      ) : null}
      <Navbar
        onSelect={() => popups.closeAll()}
        className="navbar-dark nav-container"
        expand="xl"
        expanded={open[1]}
      >
        {/* Actual phone popup */}
        <PhonePopup
          open={open[0]}
          toggle={popups.toggle}
          popUpId="phonePopup"
        />
        <SubmissionForm
          open={formOpen}
          toggle={popups.toggle}
          popUpId="submissionPopup"
        />
        <Nav.Link
          as={Link}
          eventKey={"Home"}
          onClick={() => {
            onSelect("Home");
            popups.closeAll();
          }}
          className="hide-mobile"
          to={"/"}
        >
          <div class="logo-container">
            <h4>
              Miraculous
              <br />
              Carpet
              <br />
              Care
            </h4>
          </div>
        </Nav.Link>
        {/* Toggle phone when visible */}
        <BiPhone
          className={phoneAnimation + " show-mobile icon clickable"}
          onClick={() => {
            setPhoneAnimation("jump");
            popups.toggle(0);
          }}
        />
        {/* Toggle Menu */}
        <Navbar.Toggle
          className="nav-logo"
          onClick={() => {
            setmenuAnimation("fade");
            popups.toggle(1);
          }}
        >
          {open[1] ? (
            <IoMdClose
              onClick={() => {
                setmenuAnimation("fade");
                popups.closeAll();
              }}
              className={menuAnimation + " icon"}
            />
          ) : (
            <CgMenuRound className={menuAnimation + " icon clickable"} />
          )}
        </Navbar.Toggle>
        <Collapse
          currentPage={currentPage}
          onSelect={(passed) => {
            popups.closeAll();
            onSelect(passed);
          }}
          links={links}
          renderLink={renderLink}
        />
        {/* Toggle Form */}
        <FiMail
          className={formAnimation + " icon clickable"}
          onClick={() => {
            setFormAnimation("jump");
            popups.toggle(2);
          }}
          aria-controls="emailPopUp"
          aria-expanded={open[2]}
        />
      </Navbar>
    </div>
  );
};
export default NavBar;
