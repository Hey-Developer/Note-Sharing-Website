import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { isEmailVerified } from "../../helpers/isEmailVerified";
import { signUpWithFirebase } from "../../Redux/asyncActions.js/authAsyncActions";
function SignUp(props) {
  const auth = useSelector((state) => state.firebase.auth);
  const authStatus = useSelector((state) => state.auth.signUpStatus);
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  const [formData, setFormData] = useState(initialState);

  const [passwordMatches, setPasswordMatches] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const passwordVerification = (e) => {
    if (e.target.value === formData.password) {
      setPasswordMatches(true);
    } else {
      setPasswordMatches(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpWithFirebase(formData));
  };

  if (auth.uid) {
    if (!isEmailVerified()) {
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
        <h5 className="grey-text text-darken-3 center-align">Sign-Up</h5>

        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>

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
            className="psw-inp"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="input-field">
          <label htmlFor="cnfPassword">Confirm Password</label>
          <input
            className="psw-inp"
            type="password"
            name="cnfPassword"
            id="cnfPassword"
            onChange={passwordVerification}
            value={formData.cnfPassword}
          />
        </div>
        <p>
          <label>
            <input
              type="checkbox"
              onClick={() => {
                var x = document.querySelectorAll(".psw-inp");
                x.forEach((y) => {
                  if (y.type === "password") {
                    y.type = "text";
                  } else {
                    y.type = "password";
                  }
                });
              }}
            />
            <span>Show Password</span>
          </label>
        </p>
        {!passwordMatches && (
          <p className="red-text">Password didn't Matches</p>
        )}

        <div className="input-felid">
          <button className="btn pink lighten-1 z-depth-0">SignUp</button>
        </div>

        <div className="red-text center">
          {authStatus.error ? <p>{authStatus.error}</p> : null}
        </div>
      </form>
    </div>
  );
}

export default SignUp;
