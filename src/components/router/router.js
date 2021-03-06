import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login from "../../containers/loginCon";
import Admin from "../../containers/admin/adminCont";
import AdminList from "../../containers/adminList/adminListCont";

import {
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1) * 3,
  },
  content2: {
    flexGrow: 1,
  },
});
class Routes extends Component {
  render() {
    const { login, classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <main className={classes.content2}>
            <Route exact path="/" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/adminList" component={AdminList} />
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(Routes);
