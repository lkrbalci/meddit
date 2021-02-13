import axios from "axios";

const apiKey = "AIzaSyAhhoR5s2hE3SjrvV_K2l9xnJfn8UjLlXk";
const projectId = "meddit-fe85c";

//to be used at auth sign up calls
export const signUpInstance = axios.create({
  baseURL:
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + apiKey,
});

//to be used at auth sing in calls
export const singInInstance = axios.create({
  baseURL:
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
    apiKey,
});

//to be used at db query calls
export const queryInstance = axios.create({
  baseURL: "https://" + projectId + ".firebaseio.com/users/jack/name.json",
});
