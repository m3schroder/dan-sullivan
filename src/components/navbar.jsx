import React, { useState, useEffect } from "react";
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

const NavBar = ({ links, onSelect, currentPage }) => {
  //0 is phone  1 is menu   2 is the form
  const [open, setOpen] = useState([false, false, false]);
  const [menuAnimation, setmenuAnimation] = useState("");
  const [phoneAnimation, setPhoneAnimation] = useState("");
  const [formAnimation, setFormAnimation] = useState("");
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [submenuClass, setSubMenuClass] = useState("");
  const anyOpen = open.some((x) => x === true);

  useEffect(() => {
    setTimeout(() => {
      setFormAnimation(" ");
      setPhoneAnimation(" ");
    }, 200);
  }, [formAnimation, phoneAnimation]);
  const toggle = (toToggle) => {
    let temp = [false, false, false];
    for (let x = 0; x < open.length; x++) {
      if (x === toToggle) {
        temp[x] = !open[x];
      }
    }
    setOpen(temp);
    setTimeout(() => {
      setShowSubmenu(false);
      setSubMenuClass("");
      setMenuClass("");
    }, 500);
  };
  const toggleSubmenu = () => {
    showSubmenu ? setMenuClass("slideRight") : setMenuClass("slideLeft");
    showSubmenu
      ? setSubMenuClass("subslideRight")
      : setSubMenuClass("subslideLeft");
    setShowSubmenu(!showSubmenu);
  };
  const closeAll = () => {
    setOpen([false, false, false]);
    setTimeout(() => {
      setSubMenuClass("");
      setMenuClass("");
      setShowSubmenu(false);
    }, 500);
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
        <BiPhone
          className={phoneAnimation + " show-mobile icon"}
          onClick={() => {
            setPhoneAnimation("jump");
            toggle(0);
          }}
        />
        {/* Toggle Menu */}
        <Navbar.Toggle
          className="nav-logo"
          onClick={() => {
            setmenuAnimation("fadeOut");
            setTimeout(() => {
              toggle(1);
              setmenuAnimation("fadeIn");
            }, 200);
          }}
        >
          {open[1] ? (
            <IoMdClose
              onClick={() => closeAll()}
              className={menuAnimation + " icon"}
            />
          ) : (
            <CgMenuRound className={menuAnimation + " icon"} />
          )}
        </Navbar.Toggle>
        <Collapse
          currentPage={currentPage}
          onSelect={onSelect}
          menuClass={menuClass}
          submenuClass={submenuClass}
          toggleSubmenu={toggleSubmenu}
          anyOpen={anyOpen}
          links={links}
          renderLink={renderLink}
        />
        {/* Toggle Form */}
        <div style={{ margin: "5px" }}>
          <FiMail
            className={formAnimation + " icon shadow-none"}
            onClick={() => {
              setFormAnimation("jump");
              toggle(2);
            }}
            aria-controls="emailPopUp"
            aria-expanded={open[2]}
          />
        </div>
      </Navbar>
    </div>
  );
};
export default NavBar;
