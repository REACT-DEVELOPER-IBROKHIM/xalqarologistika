import { resolve } from "@helpers/resolve-response";
import axios from "@api";

export async function uploadSignature(id, type, file) {
  const authResponse = await resolve(
    fetch(
      `${import.meta.env.VITE_API_URL}upload/signature?id=` +
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

export async function removeDocumentSignature(id, type) {
  const authResponse = await resolve(
    axios.delete(`/upload/signature?id=${id}&type=${type}`),
  );
  return authResponse.data;
}
