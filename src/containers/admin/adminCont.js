import React, { Component } from "react";
import { connect } from "react-redux";
import Admin from "../../components/admin/admin";


export const mapStateToProps = store => {
  return {
    login: store.login,
    admin: store.admin
  };
};

/*export const mapDispatchToProps = dispatch => {
  return {
    setEmail: (payload) => {
      dispatch(setEmail(payload));
    },
    setPwd: (payload) => {
      dispatch(setPwd(payload));
    }
  };
};*/

export default connect(mapStateToProps, null)(Admin);