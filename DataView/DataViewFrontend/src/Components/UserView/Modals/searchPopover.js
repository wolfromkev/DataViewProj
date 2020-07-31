import React, { Fragment, useEffect, useState } from "react";
import classes from "./searchPopover.module.scss";
import uniqid from "uniqid";
import { connect } from "react-redux";
import {
  Typography,
  ListItemText,
  List,
  ListItem,
  CircularProgress,
  Divider,
} from "@material-ui/core";

function SearchPopover(props) {
  const [users, setUsers] = useState(props.users);

  useEffect(() => {
    setUsers(props.users);
  }, [props.users]);

  function selectUser(user) {
    props.addUser(user);
  }

  let searchResults =
    users.length > 0 ? (
      users.map((user) => {
        return (
          <Fragment key={uniqid()}>
            <ListItem
              key={user.fullName}
              button
              autoFocus={true}
              divider={true}
              onClick={() => selectUser(user)}
            >
              <ListItemText primary={`${user.fullName}`} />
            </ListItem>
            <Divider variant="middle" />
          </Fragment>
        );
      })
    ) : (
      <Fragment>
        {props.loading ? (
          <CircularProgress />
        ) : (
          <Typography className={classes.Typography}>
            "No users with that handle were found."{" "}
          </Typography>
        )}
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

SearchPopover.propTypes = {};

const mapStateToProps = (state) => ({
  users: state.miscData.searchedUsers,
  loading: state.miscData.loadingUserData,
});

export default connect(mapStateToProps)(SearchPopover);
