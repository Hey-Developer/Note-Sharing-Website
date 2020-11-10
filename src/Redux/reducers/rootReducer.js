import { combineReducers } from "redux";
import { authReducer } from "./authReducers";
import { projectReducer } from "./projectsReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export const rootReducers = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
