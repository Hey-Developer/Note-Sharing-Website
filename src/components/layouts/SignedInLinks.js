import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOutWithFirebase } from "../../Redux/asyncActions.js/authAsyncActions";

function SignedInLinks({ initials }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(signOutWithFirebase());
  };

  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={handleClick}>Log Out</a>
      </li>{" "}
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {initials}
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedInLinks;
