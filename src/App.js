import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layouts/Navbar";
import CreateProject from "./components/projects/CreateProject";
import ProjectDetails from "./components/projects/ProjectDetails";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rrfConfig } from "./config/rrfConfig";
import firebase from "./config/fbConfig";
import AuthIsLoaded from "./components/auth/AuthIsLoaded";
import ErrorPage from "./components/Error/404Page";
import VerifyEmail from "./components/auth/VerifyEmail";

// Creating react-redux-firestore props:
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/project/:id" component={ProjectDetails} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/create" component={CreateProject} />
                <Route exact path="/verify" component={VerifyEmail} />
                <Route component={ErrorPage} />
              </Switch>
            </AuthIsLoaded>
          </ReactReduxFirebaseProvider>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
