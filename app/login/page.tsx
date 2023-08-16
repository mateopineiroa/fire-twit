"use client";

import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth, provider } from "../../lib/firebase-config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [loadingState, setLoadingState] = useState("");
  const router = useRouter();

  async function signIn() {
    setLoadingState("redirecting...");
    try {
      const userCred = await signInWithPopup(auth, provider);
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      });
      if (response.status === 200) {
        setLoadingState("Done!");
        router.push("/protected");
      }
    } catch (err) {
      console.log("signInWithRedirect error", err);
    } finally {
      setLoadingState("redirected correctly!");
    }
  }

  return (
    <>
      {loadingState || (
        <button
          className="group m-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={signIn}
        >
          Continue With Github{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </button>
      )}
    </>
  );
}
