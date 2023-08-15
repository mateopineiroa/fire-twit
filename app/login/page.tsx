"use client";

import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../lib/firebase-config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [loadingState, setLoadingState] = useState("");
  const router = useRouter();

  useEffect(() => {
    const authenticate = async () => {
      try {
        const userCred = await getRedirectResult(auth);

        if (!userCred) return;
        setLoadingState("Getting redirect data...");

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
        setLoadingState("getRedirectResult went wrong!");
        console.log("getRedirectResult error", err);
      }
    };
    authenticate();
  }, [router]);

  async function signIn() {
    setLoadingState("redirecting...");
    try {
      await signInWithRedirect(auth, provider);
    } catch (err) {
      console.log("signInWithRedirect error", err);
    } finally {
      setLoadingState("redirected correctly!");
    }
  }

  return <>{loadingState || <button onClick={signIn}>Sign In</button>}</>;
}
