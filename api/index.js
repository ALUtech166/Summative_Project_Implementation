import axios from "axios";

export const Apisful = axios.create({
  // We are using apisful.com as a backend for this e-commerce website
  baseURL: "https://api.apisful.com/v1/collections/",
  headers: {
    // Put your access key here
    "X-Api-Key": " Pbfa2sf4vYXPGyZLPy82c1NYJPR3M0d5PAMFZfWAfk0",
  },
  validateStatus(status) {
    return status >= 200 && status < 500;
  },
});
