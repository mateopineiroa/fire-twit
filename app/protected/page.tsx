import Button from "./button";
import { cookies } from "next/headers";

export default async function Protected() {
  try {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "GET",
      headers: {
        Cookie: `session=${cookies().get("session")?.value}`,
      },
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  return (
    <>
      Logged in successfully!
      <Button />
    </>
  );
}
