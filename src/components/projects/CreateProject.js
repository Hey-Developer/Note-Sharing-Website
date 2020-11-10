import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProjectToDb } from "../../Redux/asyncActions.js/projectsAsyncActions";
import { Redirect } from "react-router-dom";
import { isEmailVerified } from "../../helpers/isEmailVerified";

function CreateProject(props) {
  const [projectData, setProjectData] = useState({
    title: "",
    content: "",
  });

  const auth = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProjectToDb(projectData));

    //>> To redirect the user, to home page after creating project..
    props.history.push("/");

    // firestore.collection("projects").add({
    //   ...projectData,
    //   authorFirstName: "CNU",
    //   authorLastName: "Singhaniya",
    //   authorId: "12345",
    //   createdAt: new Date(),
    // });
  };

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
    <div className="container">
      <form onSubmit={handleSubmit} className="blur-bg" autoComplete="off">
        <h5 className="grey-text text-darken-3 center-align">
          Create Project -_-
        </h5>

        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={projectData.title}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
            value={projectData.content}></textarea>
        </div>

        <div className="input-felid">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateProject;
