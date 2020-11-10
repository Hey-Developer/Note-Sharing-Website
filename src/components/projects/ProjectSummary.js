import React from "react";
import moment from "moment";

function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary blur-bg">
      <div className="card-content gray-text-text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by the {project.authorFirstName} {project.authorLastName}
        </p>
        <div className="white-text darken-3 mt">
          {moment(project.createdAt.toDate()).calendar()}
        </div>
      </div>
    </div>
  );
}

export default ProjectSummary;
