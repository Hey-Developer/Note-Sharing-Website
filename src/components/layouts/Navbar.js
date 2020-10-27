import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Navbar() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          CloveS
        </Link>
        {userAuthenticated && <SignedInLinks />}
        {!userAuthenticated && <SignedOutLinks />}
      </div>
    </nav>
  );
}

export default Navbar;
