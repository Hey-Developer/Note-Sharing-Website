import firebase from "firebase";
import "firebase/auth";

export const isEmailVerified = () => {
  const user = firebase.auth().currentUser;

  if (user) {
    return user.emailVerified;
  } else return null;
};
