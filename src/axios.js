import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-2c8cb.cloudfunctions.net/api", // aip url / cloud function
});

export default instance;
// http://localhost:5001/clone-2c8cb/us-central1/api - local host
