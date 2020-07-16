import React, { Fragment, useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import classes from "./searchPopover.module.scss";
import uniqid from "uniqid";
import arrayFilter from "../../../Utility/arrayFilter";
import { connect } from "react-redux";
import {
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemText,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";

const users = [
  { name: "Kevin Wolfrom" },
  { name: "Bill B." },
  { name: "John G" },
  { name: "Mike M." },
];

function SearchModal(props) {
  let searchResults;
  const [userSearch, setUserSearch] = useState(props.userSearch);

  if (users.length > 0) {
    searchResults = users.map((user) => {
      return (
        <Fragment key={uniqid()}>
          <ListItem key={user.name} button>
            <ListItemText id={user.name} primary={`${user.name}`} />
          </ListItem>
          <Divider variant="middle" />
        </Fragment>
      );
    });
  } else {
    searchResults = (
      <Fragment>
        <Typography className={classes.Typography}>
          {" "}
          No users with that handle were found.
        </Typography>
      </Fragment>
    );
  }

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
