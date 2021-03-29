import AXIOS from "./axios";

export class User {
  static fetch(user_id = 2) {
    return AXIOS.get(`https://reqres.in/api/users/${user_id}`);
  }

  static update(user_id = 2, payload) {
    return AXIOS.put(`https://reqres.in/api/users/${user_id}`, payload);
  }
}
