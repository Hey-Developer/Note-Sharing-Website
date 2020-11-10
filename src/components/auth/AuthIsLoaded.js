import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoaded, useFirebase } from "react-redux-firebase";
import { signOutSuccess } from "../../Redux/actions/authActions";

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  const firebase = useFirebase();
  const dispatch = useDispatch();

  if (!isLoaded(auth)) {
    // If tab is closed then sessionStorage will be cleared and hence we will  logout from our app.
    if (!sessionStorage.getItem("userLoggedIn")) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch(signOutSuccess());
        });
    }
    return <div className="container section center">Loading Screen...</div>;
  }
  return children;
}

export default AuthIsLoaded;
