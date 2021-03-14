import axios from "axios";

const apiKey = "AIzaSyCBcp5C0NjyknIQ3wB0BwUoTokphCHRxxU";
//const projectId = "meddit-fe85c";

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
  baseURL:
    "https://meddit-fe85c-default-rtdb.europe-west1.firebasedatabase.app/",
});
