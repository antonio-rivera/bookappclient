import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

//These functions make the requests that our own server will handle
//and return our data

//This function makes the AJAX call and our server responds with the data if no errors were found
export const getDiscussion = () => api.get("/discussion");

//This function validates a login request from an user by checking if the data entered is in the database
export const login = (formData) =>
  api.get("/validate", {
    params: { body: formData },
  });

//This function inserts the form data from AddComment component to add it to the discussion
export const insert = (formData) => api.post("/comment", formData);

const discussionApi = {
  getDiscussion,
  login,
  insert,
}; //Object that groups all AJAX call functions

export default discussionApi;
