import {
  emailSentError,
  emailVerificationSent,
  signInFailed,
  signInSuccess,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "../actions/authActions";
import firebase from "firebase";
import "firebase/auth";
import { projectFireStore } from "../../config/fbConfig";

export const signInWithFirebase = (credentials) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch(signInSuccess());
        sessionStorage.setItem("userLoggedIn", true);
      })
      .catch((err) => {
        dispatch(signInFailed(err));
      });
  };
};

/* 
We can get firebase using getFirebase method from the react-redux-firebase package but now that method is deprecated
hence i have to use the traditional way of using firebase-->
*/

export const signOutWithFirebase = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(signOutSuccess());
      });
  };
};

export const signUpWithFirebase = (newUser) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firebase
          .firestore()
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then(() => {
        dispatch(signUpSuccess());
        var user = firebase.auth().currentUser;
        user
          .sendEmailVerification()
          .then(function () {
            dispatch(emailVerificationSent());
          })
          .catch(function (err) {
            dispatch(emailSentError(err.message));
          });
      })
      .catch((err) => {
        dispatch(signUpFailed(err.message));
      });
  };
};

// export const isEmailVerified = () => {
//   return (dispatch)=>{
//       firebase.auth().currentUser.reload().then(()=>{

//       })
//   };
// }
