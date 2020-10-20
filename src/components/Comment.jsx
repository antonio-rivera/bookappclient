import React, { useState } from "react";
import Reply from "./Reply";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faReply,
  faHeart,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Comment.scss";

import formatDistanceToNow from "date-fns/formatDistanceToNow"; //To format dates

export default function Comment({
  //props are destructured for easier use
  index,
  message,
  username,
  posting_time,
  hearts,
  photo,
  comment_type,
  replies,
}) {
  const [render, setRender] = useState(false); //This state determines if replies should render

  let d = new Date(posting_time);
  d.setHours(d.getHours() - 4);
  const relativePT = formatDistanceToNow(d); //Format date and time

  function dynamicStyles() {
    //Function that dynamically changes height based on replies

    if (index === 0) {
      return {
        borderTop: "2.6px solid rgba(175, 175, 175, 0.37)",
        borderRadius: "10px",
      };
    }
  } //Dynamic styles ends

  function flipArrow() {
    //Flips the arrow when click to expand/collapse replies
    if (render) {
      return <FontAwesomeIcon icon={faChevronDown} />;
    } else {
      return <FontAwesomeIcon icon={faChevronRight} />;
    }
  }

  return (
    <div
      className="Community-Comment"
      // Dynamically change styling based on the element and if replies need to be rendered
      style={dynamicStyles()}
    >
      <div className="Comment">
        <div className="left-column">
          <span
            className="photo"
            style={{ backgroundImage: `url(${photo})` }}
          />
        </div>

        <div className="middle-column">
          <div className="user-info">
            <span className="username">{username}</span>
            <span className="message">{message}</span>
          </div>

          <div className="actions">
            <FontAwesomeIcon icon={faReply} />
            <span className="replies">{replies.length}</span>
            <FontAwesomeIcon icon={faHeart} />
            <span className="hearts">{hearts}</span>
            <FontAwesomeIcon icon={faShareAlt} />
          </div>
        </div>

        <div className="right-column">
          <div className="time-reply-container">
            <span className="posting_time">{relativePT}</span>

            {replies.length !== 0 ? (
              <div className="arrow-right" onClick={() => setRender(!render)}>
                {flipArrow()}
              </div>
            ) : (
              ""
            )}
          </div>

          <span className="comment-type">{comment_type}</span>
        </div>
      </div>
      {render === true
        ? replies.map(({ reply_id, ...otherReplyData }) => (
            <Reply key={reply_id} reply_id={reply_id} {...otherReplyData} />
          ))
        : []}
    </div>
  );
}
