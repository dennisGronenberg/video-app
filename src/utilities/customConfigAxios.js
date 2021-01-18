import axios from "axios";

const customInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    "Test": "test"
  }
})

