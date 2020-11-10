export const ADD_PROJECT = "ADD_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const ADD_PROJECT_ERROR = "ADD_PROJECT_ERROR";

//Action creators-->
export const addProject = (project) => {
  return {
    type: ADD_PROJECT,
    payload: project,
  };
};

export const removeProject = (project_id) => {
  return {
    type: REMOVE_PROJECT,
    payload: project_id,
  };
};

export const addProjectError = (err) => {
  return {
    type: ADD_PROJECT_ERROR,
    payload: err,
  };
};
