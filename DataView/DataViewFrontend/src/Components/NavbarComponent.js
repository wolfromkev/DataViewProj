import React, { useState } from "react";
import classes from "./NavbarComponent.module.css";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={classNames("card-card-chart", classes.NavbarComponent)}
        expand="md"
      >
        <NavbarBrand>DataView</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Nav className="mr-auto" navbar>
          <span className={classes.linkContainer}>
            <span className={classes.item}>
              <Link to="/"> Home</Link>
            </span>
            <span className={classes.item}>
              <Link to="/productview"> Product View </Link>
            </span>
            <span className={classes.item}>
              <Link to="/toolview"> Tool View </Link>
            </span>
          </span>
        </Nav>
      </Navbar>
    </div>
  );
}
