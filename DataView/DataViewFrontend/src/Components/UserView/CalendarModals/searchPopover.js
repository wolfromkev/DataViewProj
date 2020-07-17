import React, { Fragment, useState } from "react";
import classes from "./searchPopover.module.scss";
import uniqid from "uniqid";
import arrayFilter from "../../../Utility/arrayFilter";
import { connect } from "react-redux";
import {
  Typography,
  ListItemText,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";

const users = [
  { name: "Kevin Wolfrom", email: "kevin@kevin.com" },
  { name: "Bill B." },
  { name: "John G" },
  { name: "Mike M." },
  { name: "Bill B." },
  { name: "John G" },
  { name: "Mike M." },
  { name: "Bill B." },
  { name: "John G" },
  { name: "Mike M." },
  { name: "Bill B." },
  { name: "John G" },
  { name: "Mike M." },
  { name: "Bill B." },
  { name: "John G" },
  { name: "Mike M." },
];

function SearchModal(props) {
  let userData = props.search
    ? arrayFilter(props.users, props.userSearch)
    : null;

  function selectUser(user) {
    props.clearSearch();
    props.addUser(user);
  }

  let searchResults =
    users.length > 0 ? (
      users.map((user) => {
        return (
          <Fragment key={uniqid()}>
            <ListItem key={user.name} button onClick={() => selectUser(user)}>
              <ListItemText id={user.name} primary={`${user.name}`} />
            </ListItem>
            <Divider variant="middle" />
          </Fragment>
        );
      })
    ) : (
      <Fragment>
        <Typography className={classes.Typography}>
          {" "}
          No users with that handle were found.
        </Typography>
      </Fragment>
    );

  return (
    <div className={classes.searchContainer}>
      <List dense className={classes.List}>
        {searchResults}
      </List>
    </div>
  );
}

SearchModal.propTypes = {};

const mapStateToProps = (state) => ({
  users: state.miscData.userData,
});

export default connect(mapStateToProps, null)(SearchModal);
