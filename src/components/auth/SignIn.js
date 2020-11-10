import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInWithFirebase } from "../../Redux/asyncActions.js/authAsyncActions";
import { Link, Redirect } from "react-router-dom";
import { isEmailVerified } from "../../helpers/isEmailVerified";

function SignIn(props) {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.signInStatus);
  const auth = useSelector((state) => state.firebase.auth);

  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInWithFirebase(formData));
    setFormData(initialState);
  };

  if (auth.uid) {
    if (isEmailVerified()) {
      return <Redirect to="/verify" />;
    }
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <form className="blur-bg" onSubmit={handleSubmit}>
        {props.location.state ? (
          <p className="center grey-text text-darken-3 alert-text">
            {props.location.state.text}
          </p>
        ) : null}
        <h5 className="grey-text text-darken-3 center-align">Sign-In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="input-felid">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
        <div className="red-text center">
          {authStatus.error ? <p>{authStatus.error}</p> : null}
        </div>
        <p className="center grey-text text-darken-3 ">
          Not Registered?{" "}
          <Link to="/signup" className="link">
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
