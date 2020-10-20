import React from "react";
import { Link } from "react-router-dom";
import "../styles/CommentPrompt.scss";

export default function CommentPrompt({ username }) {
  return (
    <div className="CommentPrompt">
      <span className="greeting">Hi {username}!</span>
      <Link to="/AddComment" className="prompt-button">
        Start a new discussion
      </Link>
    </div>
  );
}
