import React from "react";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../assets/scss/navbar.scss";

const MenuCollapse = ({ currentPage, links, onSelect }) => {
  let services = [
    { title: "Carpet Cleaning", path: "carpet" },
    { title: "Upholstery Cleaning", path: "upholstery" },
    { title: "Area Rug Cleaning", path: "rug" },
    { title: "Tile Cleaning", path: "tile" },
  ];
  let serviceStyle = currentPage === "Services" ? "nav-link active" : "";
  return (
    <Navbar.Collapse className="nav-collapse popup-box">
      <Nav activeKey={currentPage} className={"nav-menu"}>
        <Dropdown>
          <div className="mainOptions mainmenu">
            {links.map((link) => {
              return link.text === "Services" ? (
                <Dropdown.Toggle
                  key={link.text}
                  class={serviceStyle}
                  id="service-drop"
                >
                  {link.text}
                </Dropdown.Toggle>
              ) : (
                <li key={link.text} className="nav-item">
                  <Nav.Link
                    as={Link}
                    id={link.id}
                    eventKey={link.text}
                    onClick={() => onSelect(link.text)}
                    className={link.style}
                    to={link.path}
                  >
                    <p>{link.text}</p>
                  </Nav.Link>
                </li>
              );
            })}
          </div>
          <Dropdown.Menu>
            <div>
              {services.map((service) => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      onSelect("Services");
                    }}
                  >
                    <Link to={"/services/" + service.path}>
                      {service.title}
                    </Link>
                  </Dropdown.Item>
                );
              })}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar.Collapse>
  );
};

export default MenuCollapse;
