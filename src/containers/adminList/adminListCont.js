import React, { Component } from "react";
import { connect } from "react-redux";
import AdminList from "../../components/adminList/adminList";


export const mapStateToProps = store => {
  return {
    adminlist:store.adminlist,
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

export default connect(mapStateToProps, null)(AdminList);