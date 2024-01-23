import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";

if (
  !process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
  !process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
) {
  throw new Error("Google client ID and client secret are required.");
}
export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
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
  // pages: { signIn: "/login" },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
});
