import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../assets/css/navbar.css";

const MenuCollapse = ({
  currentPage,
  submenu,
  toggleSubmenu,
  links,
  renderLink,
  onSelect,
}) => {
  let subMenuClass = submenu ? "subSlideLeft" : "";
  let submenuItems = [];
  return (
    <Navbar.Collapse className="nav-collapse popup-box">
      <Nav activeKey={currentPage} className="nav-menu">
        {links.map((link) => {
          if (link.submenu) {
            submenuItems.push(link);
            return null;
          } else {
            return (
              <li key={link.text} className="nav-item">
                <Nav.Link
                  as={Link}
                  id={link.id}
                  eventKey={link.path}
                  onClick={() => onSelect(link.path)}
                  className={link.style}
                  to={link.path}
                >
                  {renderLink(link)}
                </Nav.Link>
              </li>
            );
          }
        })}
        <NavDropdown
          className={subMenuClass}
          onClick={() => toggleSubmenu()}
          title="Services"
        >
          {submenuItems.map((subitem) => (
            <li key={subitem.text}>
              <Nav.Link
                as={Link}
                id={subitem.id}
                eventKey={subitem.path}
                onClick={() => onSelect(subitem.path)}
                className={subitem.style}
                to={subitem.path}
              >
                {renderLink(subitem)}
              </Nav.Link>
            </li>
          ))}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  );
};

export default MenuCollapse;
