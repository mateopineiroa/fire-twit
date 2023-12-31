import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import {
//   GithubAuthProvider,
//   getAuth,
//   getRedirectResult,
//   signInWithRedirect,
// } from "firebase/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const authenticate = async () => {
  //   const auth = getAuth();
  //   // Sign in using a redirect.
  //   const provider = new GithubAuthProvider();
  //   // Start a sign in process for an unauthenticated user.
  //   provider.addScope("repo");
  //   await signInWithRedirect(auth, provider);
  //   // This will trigger a full page redirect away from your app

  //   // After returning from the redirect when your app initializes you can obtain the result
  //   const result = await getRedirectResult(auth);
  //   if (result) {
  //     // This is the signed-in user
  //     const user = result.user;
  //     // This gives you a Github Access Token.
  //     const credential = GithubAuthProvider.credentialFromResult(result);
  //     const token = credential?.accessToken;
  //     console.log(token);
  //   }
  // };
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
