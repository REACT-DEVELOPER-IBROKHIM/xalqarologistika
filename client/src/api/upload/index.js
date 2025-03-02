import { resolve } from "../../helpers/resolve-response";
import axios from "@api";

export async function uploadSignature(id, type, file) {
  console.log("id", id);
  console.log("type", type);
  console.log("file", file.get("file"));
  const authResponse = await resolve(
    fetch(
      "http://localhost:9000/api/upload/signature?id=" + id + "&type=" + type,
      {
        body: file,
        method: "POST",
      },
    ),
  );
  return authResponse.data;
}
