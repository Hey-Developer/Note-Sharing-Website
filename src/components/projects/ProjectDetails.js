import React from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { isEmailVerified } from "../../helpers/isEmailVerified";
import moment from "moment";

function ProjectDetails(props) {
  // we are extracting information of the route parameter which we pass in the path in the route
  const id = props.match.params.id;

  //* Now we have to subscribe this component to firestore so that it can also receives updates directly from the cloud.
  useFirestoreConnect(["projects"]);

  const projects = useSelector((state) => state.firestore.data.projects);
  // But this projects contain all the projects which we don't want we want a project with the particular id-->
  const project = projects ? projects[id] : null;

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

  let returnJsx;
  if (project) {
    returnJsx = (
      <div className="container project-details section">
        <div className="card blur-bg">
          <div className="card-content">
            <span className="card-title">Project Title- {project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey-text  text-darken-3">
            <div>{`Posted by The ${project.authorFirstName} ${project.authorLastName}`}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    returnJsx = (
      <div className="container center">
        <h1 className="white-text">Loading Project...</h1>
      </div>
    );
  }

  return returnJsx;
}

export default ProjectDetails;
