import React from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";

function Dashboard() {
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
