import Button from "./button";
import { cookies } from "next/headers";

export default async function Protected() {
  let data = "not user data";
  try {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "GET",
      headers: {
        Cookie: `session=${cookies().get("session")?.value}`,
      },
    });
    data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("get session data in server component error", err);
  }
  return (
    <div className="flex w-fit flex-col gap-4">
      <p>Logged in successfully!</p>
      <p>Session data: {JSON.stringify(data, null, 4)}</p>
      <Button />
    </div>
  );
}
