export default async function Protected() {
  const res = await fetch("http://localhost:3000/api/login", {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
  return "Logged in successfully!";
}
