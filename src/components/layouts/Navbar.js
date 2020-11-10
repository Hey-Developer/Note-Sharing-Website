import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { useSelector } from "react-redux";

function Navbar() {
  const firebase = useSelector((state) => state.firebase);
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            CloveS
          </Link>
          {firebase.auth.uid ? (
            <SignedInLinks initials={firebase.profile.initials} />
          ) : (
            <SignedOutLinks />
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
