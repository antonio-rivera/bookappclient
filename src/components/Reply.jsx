import React from "react";
import "../styles/Reply.scss";
import formatDistanceToNow from "date-fns/formatDistanceToNow"; //To format dates

export default function Reply({
  photo,
  username,
  reply_message,
  posting_time,
}) {
  const relativePT = formatDistanceToNow(new Date(posting_time)); //Format date and time

  return (
    <div className="Reply">
      <div className="left-column">
        <span className="photo" style={{ backgroundImage: `url(${photo})` }} />
      </div>

      <div className="middle-column">
        <span className="username">{username}</span>
        <span className="message">{reply_message}</span>
      </div>

      <div className="right-column">
        <span className="posting_time">{relativePT}</span>
      </div>
    </div>
  );
}
