import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../assets/css/navbar.css";

const MenuCollapse = ({ currentPage, links, renderLink, onSelect }) => {
  return (
    <Navbar.Collapse className="nav-collapse popup-box">
      <Nav activeKey={currentPage} className="nav-menu">
        {links.map((link) => (
          <li key={link.path} className="nav-item">
            <Nav.Link
              as={Link}
              id={link.id}
              eventKey={link.text}
              onClick={() => onSelect(link.text)}
              className={link.style}
              to={link.path}
            >
              {renderLink(link)}
            </Nav.Link>
          </li>
        ))}
      </Nav>
    </Navbar.Collapse>
  );
};

export default MenuCollapse;
