// previously we just return a object with type and payload property in our action creator but now we can return a function
// the function which we return have two property one is dispatch of store and the other is getState to see the current state of the store

import { addProject, addProjectError } from "../actions/projectsActions";

export const addProjectToDb = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    //>>make a async call to the DB
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch(addProject(project));
      })
      .catch((err) => {
        dispatch(addProjectError(err));
      });
  };
};
