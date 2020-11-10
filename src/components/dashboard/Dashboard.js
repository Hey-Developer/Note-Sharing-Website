import React from "react";
import { useSelector } from "react-redux";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { Redirect } from "react-router-dom";
import { isEmailVerified } from "../../helpers/isEmailVerified";

function Dashboard() {
  const auth = useSelector((state) => state.firebase.auth);

  if (!auth.uid) {
    const authText = "To Continue with the app please Sign In First :)";
    return (
      <Redirect
        to={{
          pathname: "/signin",
          state: {
            text: authText,
          },
        }}
      />
    );
  } else if (!isEmailVerified()) {
    const authText = "Please Verify Your Email first :)";

    return (
      <Redirect
        to={{
          pathname: "/verify",
          state: {
            text: authText,
          },
        }}
      />
    );
  }

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          {/* this div is for project list */}
          <ProjectList />
        </div>
        <div className="col s12 m5 offset-m1">
          {/* this div is for notification list */}
          <Notifications />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
