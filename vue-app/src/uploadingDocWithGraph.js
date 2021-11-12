import * as MicrosoftGraph from "@microsoft/microsoft-graph-client";
import { getMsalToken } from "./authenticatingWithMsal";

export async function uploadDocument(uploadURL, fileToUpload){
    await window
    .fetch(uploadURL, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${await getMsalToken()}`,
        // "Content-Type": "application/json",
      },
      body: fileToUpload,
    })
    .then((response) => {
      console.group("Response");
      console.log(response);
      console.groupEnd();
    })
    .catch((error) => {
      console.error("ERROR UPLOADING");
      console.error(error);
    });
}