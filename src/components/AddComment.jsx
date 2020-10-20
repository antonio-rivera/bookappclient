import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import discussionApi from "../api/discussionApi";
import "../styles/AddComment.scss";

export default function AddComment({ user_id }) {
  //Data that will be sent as POST request
  const [newComment, setNewComment] = useState({
    message: "",
    comment_type: "Other",
    user_id: user_id,
  });

  let history = useHistory(); //For dynamic redirects

  //Function that handles getting the data into our state
  function handleChange(event) {
    const { name, value } = event.target;

    setNewComment({ ...newComment, [name]: value });
  }

  //When user clicks button it changes background color
  function markButton(type) {
    if (newComment.comment_type === type) {
      return {
        backgroundColor: "lightgrey",
      };
    } else {
      return { backgroundColor: "white" };
    }
  }

  async function handleSubmit() {
    if (newComment.user_id === -1) {
      alert("Please sign in to be able to comment");
      history.push("/");
    } else if (newComment.message.length < 10) {
      alert("Your comment is empty or too short!");
    } else {
      try {
        await discussionApi.insert(newComment);
        history.push("/home");
      } catch (error) {
        if (error.response.status === 400) alert(error.response.data.message);
      }
    }
  }

  return (
    <div className="AddComment">
      <div className="cancel-div">
        <Link to="/" className="cancel-link">
          Close
        </Link>
      </div>

      <textarea
        className="comment-message"
        name="message"
        placeholder="Start a new discussion"
        value={newComment.message || ""}
        onChange={handleChange}
      ></textarea>

      <div className="type-container">
        <span className="type-message">Add type: </span>
        <div className="type-list">
          <button
            className="type-button"
            value="Reccomendation"
            name="comment_type"
            onClick={handleChange}
            style={markButton("Reccomendation")}
          >
            Reccomendation
          </button>
          <button
            className="type-button"
            value="Ask"
            name="comment_type"
            onClick={handleChange}
            style={markButton("Ask")}
          >
            Ask
          </button>
          <button
            className="type-button"
            value="Challenge"
            name="comment_type"
            onClick={handleChange}
            style={markButton("Challenge")}
          >
            Challenge
          </button>
        </div>
      </div>

      <div className="submit-container">
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
