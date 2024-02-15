import NextAuth, { User } from "next-auth";
import Google from "@auth/core/providers/google";
import Credentials from "@auth/core/providers/credentials";
import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { db, fireAuth } from "@/firebase";
import { child, get, ref } from "@firebase/database";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "",
      authorization: { params: { access_type: "offline", prompt: "consent" } },
    }),
    Credentials({
      async authorize(credentials, request) {
        try {
          if (!credentials.provider) {
            const response = await signInWithEmailAndPassword(
              fireAuth,
              credentials.email as string,
              credentials.password as string,
            );
            const uid = response.user.uid;
            const snapshot = await get(child(ref(db), `users/${uid}`))
              .then((snapshot) => {
                if (!snapshot.exists()) {
                  return;
                }
                return snapshot.val();
              })
              .catch((error) => console.error(error));
            return <User>{
              email: credentials.email,
              name: snapshot.tmdb_session,
            };
          }
          return <User>{
            email: credentials.email,
            name: credentials.tmdb_session,
          };
        } catch (err) {
          console.error("next-auth credentials error: ", err);
        }
        return null;
      },
    }),
  ],
  logger: {
    error(code, ...message) {
      console.error(code, message);
    },
    warn(code, ...message) {
      console.warn(code, message);
    },
    debug(code, ...message) {
      console.debug(code, message);
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/signup/regform",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      // console.log("auth.js baseUrl: ", baseUrl);
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async authorized({ request, auth }) {
      if (!auth) {
        return NextResponse.redirect("https://www.broken-netflix.com/login");
      }
      return true;
    },
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
});
