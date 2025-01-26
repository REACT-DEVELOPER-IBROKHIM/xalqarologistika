import { resolve } from "../../helpers/resolve-response";
import axios from "@api";

export async function loginUser(data) {
  const authResponse = await resolve(axios.post("/auth/login", data));
  return authResponse.data;
}
