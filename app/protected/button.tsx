"use client";
import { signOutUser } from "@/services/signOutUser";

export default function Button() {
  return <button onClick={signOutUser}>Sign Out</button>;
}
