import React from "react";

function ProjectDetails(props) {
  // we are extracting information of the route parameter which we pass in the path in the route
  const id = props.match.params.id;
  return (
    <div className="container project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title- {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            voluptatum perferendis cupiditate assumenda corporis. Eaque
            obcaecati veniam, illo quod explicabo exercitationem sapiente
            accusantium molestias debitis deleniti saepe nostrum fugit!
            Obcaecati?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Net Ninja</div>
          <div>7th October, 2am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
