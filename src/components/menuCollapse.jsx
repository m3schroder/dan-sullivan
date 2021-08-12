import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../assets/css/navbar.css";

const MenuCollapse = ({
  currentPage,
  menuClass,
  submenuClass,
  toggleSubmenu,
  links,
  renderLink,
  onSelect,
}) => {
  let submenuItems = [];
  return (
    <Navbar.Collapse className="nav-collapse popup-box">
      <Nav activeKey={currentPage} className={"nav-menu"}>
        <div className={"mainmenu " + menuClass}>
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
                    onClick={() => {
                      onSelect(link.path);
                    }}
                    className={link.style}
                    to={link.path}
                  >
                    {renderLink(link)}
                  </Nav.Link>
                </li>
              );
            }
          })}

          <li id="service-btn" onClick={() => toggleSubmenu()}>
            Services
          </li>
        </div>
        <div className={"submenu " + submenuClass}>
          {submenuItems.map((subitem) => (
            <li key={subitem.text}>
              <Nav.Link
                as={Link}
                id={subitem.id}
                eventKey={subitem.path}
                onClick={() => {
                  onSelect(subitem.path);
                }}
                className={subitem.style}
                to={subitem.path}
              >
                {renderLink(subitem)}
              </Nav.Link>
            </li>
          ))}
        </div>
      </Nav>
    </Navbar.Collapse>
  );
};

export default MenuCollapse;
