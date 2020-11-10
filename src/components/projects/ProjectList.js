import ProjectSummary from "./ProjectSummary";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
function ProjectList() {
  // now we will subscribe this component to our firestore so that it sync all the projects directly from the cloud
  useFirestoreConnect([
    {
      collection: "projects",
      orderBy: ["createdAt", "desc"],
    },
  ]);

  const firestore = useSelector((state) => state.firestore);
  const projects = useSelector((state) => state.firestore.ordered.projects);
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
        ))}
    </div>
  );
}

export default ProjectList;
