import React, { useState } from "react";

function CreateProject() {
  const [projectData, setProjectData] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <form className="white">
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
