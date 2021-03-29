import AXIOS from "./axios";
export class Auth {
  static login({ email, password }) {
    return AXIOS.post("https://reqres.in/api/login", { email, password });
  }

  static register({ first_name, last_name, email, phone, role, password }) {
    return AXIOS.post("https://reqres.in/api/register", {
      first_name,
      last_name,
      email,
      phone,
      role,
      password,
    });
  }
}
