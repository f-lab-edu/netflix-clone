import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";

const options = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});

export { options as GET, options as POST };
