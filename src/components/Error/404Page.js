import React from "react";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="error-page center">
      <Link
        to="/"
        className="home waves-effect waves-light btn-small pink lighten-2">
        Go TO Home
      </Link>
    </div>
  );
}

export default ErrorPage;
