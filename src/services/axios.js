import axios from "axios";
let AXIOS;
AXIOS = axios.create({
  timeout: 30000,
});

export default AXIOS;
