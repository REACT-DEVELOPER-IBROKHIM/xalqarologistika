import { resolve } from "../../helpers/resolve-response";

export async function uploadSignature(id, type, file) {
  const authResponse = await resolve(
    fetch(
      "https://lionfish-app-3v9xf.ondigitalocean.app/api/upload/signature?id=" +
        id +
        "&type=" +
        type,
      {
        body: file,
        method: "POST",
      },
    ),
  );
  return authResponse.data;
}
