import { auth } from "../lib/firebase-config";
import { signOut } from "firebase/auth";

export async function signOutUser() {
  //Sign out with the Firebase client
  await signOut(auth);

  //Clear the cookies in the server
  const response = await fetch("http://localhost:3000/api/signOut", {
    method: "POST",
  });

  if (response.status === 200) {
    console.log("logged out");
  }
}
