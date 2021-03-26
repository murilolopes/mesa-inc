import AXIOS from "./axios";
export class Auth {
  static login({ email, password }) {
    return AXIOS.post("https://reqres.in/api/login", { email, password });
  }

  static logout() {
    return AXIOS.delete("");
  }

  static register({ email, password }) {
    return AXIOS.post("/api/register", { email, password });
  }
}
