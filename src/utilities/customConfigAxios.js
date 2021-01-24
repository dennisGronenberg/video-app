import axios from "axios";

const token = localStorage.getItem("token");

const customInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json"
  }
})

customInstance.defaults.headers.get['X-API-Token'] = token;

export default customInstance;