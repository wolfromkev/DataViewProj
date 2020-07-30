import React, { useState } from "react";
import classes from "./NavbarComponent.module.css";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import { logoutUser } from "../Redux/actions/userDataActions";
import { connect } from "react-redux";

function NavbarComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(false);

  const logoutHandler = () => {
    props.logoutUser();
    props.persitor.purge();
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={classNames("card-card-chart", classes.NavbarComponent)}
        expand="md"
      >
        <NavbarBrand className={classes.Logo}>DataView</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Nav className="mr-auto" navbar>
          <span className={classes.linkContainer}>
            <span className={classes.item}>
              <Link to="/dashboard"> Dashboard</Link>
            </span>
            <span className={classes.item}>
              <Link to="/productview"> Product View </Link>
            </span>
          </span>
        </Nav>
        <span className={classes.profilebutton}>
          <Link to="/profile"> Profile </Link>
        </span>
        <span className={classes.logout}>
          <div onClick={logoutHandler}>Logout</div>
        </span>
      </Navbar>
    </div>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
