import AXIOS from "./axios";

export class User {
  static fetch(user_id) {
    return AXIOS.get(`https://reqres.in/api/users/${user_id}`);
  }
}
