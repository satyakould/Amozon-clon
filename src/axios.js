import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-amzon-clone-satya.cloudfunctions.net/api",
});

export default instance;
