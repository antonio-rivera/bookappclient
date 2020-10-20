import React, { useState, useEffect } from "react";
import Header from "./Header";
import Comment from "./Comment";
import CommentPrompt from "./CommentPrompt";
import discussionApi from "../api/discussionApi";

import "../styles/Home.scss";

export default function Home({ user }) {
  const [discussion, setDiscussion] = useState([]); //State of our discussion data

  useEffect(() => {
    //Fetch data after component mounts for the first time
    const fetchData = () => {
      discussionApi
        .getDiscussion()
        .then((res) => {
          if (res.data.success) {
            setDiscussion(res.data.data);
          }
        })
        .catch((error) => console.log(error));
    };

    fetchData();
  }, []);

  return (
    <div className="Home">
      <Header />
      {discussion.map(({ comment_id, ...otherCommentData }, index) => (
        <Comment key={comment_id} index={index} {...otherCommentData} />
      ))}
      <CommentPrompt {...user} />
    </div>
  );
}
