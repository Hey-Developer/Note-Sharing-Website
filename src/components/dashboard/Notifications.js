import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import moment from "moment";

function Notifications() {
  useFirestoreConnect([
    {
      collection: "notifications",
      limit: 4,
      orderBy: ["time", "desc"],
    },
  ]);

  const notifications = useSelector(
    (state) => state.firestore.ordered.notifications
  );

  return (
    <div className="section notifications-section">
      <div className="card z-depth-0 blur-bg">
        <div className="card-content">
          <span className="card-title center">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map((notification) => {
                return (
                  <li key={notification.id} className="notification">
                    <span className="pink-text font-size-1">
                      {notification.user}
                    </span>{" "}
                    &nbsp;
                    <span>{notification.content}</span>
                    <div className="grey-text text-darken-3 note-date">
                      {moment(notification.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
