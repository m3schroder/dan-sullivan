import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../assets/css/navbar.css";

const MenuCollapse = ({ currentPage, links, renderLink, onSelect }) => {
  let services = [];
  return (
    <Navbar.Collapse className="nav-collapse popup-box">
      <Nav activeKey={currentPage} className="nav-menu">
        {links.map((link) => {
          if (link.service) {
            services.push(link);
            return null;
          } else {
            return (
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
            );
          }
        })}
        <NavDropdown title="Services">
          {services.map((service) => (
            <li key={service.path} className="nav-item">
              <Nav.Link
                as={Link}
                id={service.id}
                eventKey={service.text}
                onClick={() => onSelect(service.text)}
                className={service.style}
                to={service.path}
              >
                {renderLink(service)}
              </Nav.Link>
            </li>
          ))}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  );
};

export default MenuCollapse;
