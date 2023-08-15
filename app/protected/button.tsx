"use client";
import { signOutUser } from "@/services/signOutUser";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        try {
          await signOutUser();
          router.push("/login");
        } catch (err) {
          console.log("signOutUser error", err);
        }
      }}
    >
      Sign Out
    </button>
  );
}
