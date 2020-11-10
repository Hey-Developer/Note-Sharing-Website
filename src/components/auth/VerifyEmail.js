import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { isEmailVerified } from "../../helpers/isEmailVerified";

function VerifyEmail(props) {
  const auth = useSelector((state) => state.firebase.auth);

  if (!auth.uid) {
    const authText = "Before Verifying, Please Register your email";
    return (
      <Redirect
        to={{
          pathname: "/signup",
          state: {
            text: authText,
          },
        }}
      />
    );
  } else if (isEmailVerified()) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container section">
      <div className="section blur-bg verify-div">
        <h5 className="grey-text text-darken-3 center-align">
          Verify Your Email First
        </h5>
        <p className="section center">Go and check your mail :)</p>

        <p className="center">
          didn't get verification email?{" "}
          <a href="#" className="link">
            Resend Email
          </a>
        </p>
      </div>
    </div>
  );
}

export default VerifyEmail;
