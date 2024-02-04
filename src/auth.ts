// import NextAuth from "next-auth";
// import Google from "@auth/core/providers/google";
//
// if (
//   !process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
//   !process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
// ) {
//   throw new Error("Google client ID and client secret are required.");
// }
// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
// } = NextAuth({
//   trustHost: true,
//   providers: [
//     Google({
//       clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//       clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   logger: {
//     error(code, ...message) {
//       console.error(code, message);
//     },
//     warn(code, ...message) {
//       console.warn(code, message);
//     },
//     debug(code, ...message) {
//       console.debug(code, message);
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     async signIn({ user, account, profile, email, credentials }) {
//       const isAllowedToSignIn = true;
//       if (isAllowedToSignIn) {
//         console.log("isAllowedToSign: ", isAllowedToSignIn);
//         console.log("user: ", user);
//         console.log("account: ", account);
//         return true;
//       }
//       console.log("isAllowedToSign: ", isAllowedToSignIn);
//       return false;
//     },
//     async redirect({ url, baseUrl }) {
//       console.log("url:, ", url);
//       console.log("baseUrl:, ", baseUrl);
//       // Allows relative callback URLs
//       if (url.startsWith("/")) return `${baseUrl}${url}`;
//       // Allows callback URLs on the same origin
//       else if (new URL(url).origin === baseUrl) return url;
//       return baseUrl;
//     },
//   },
//   // pages: { signIn: "/login" },
//   secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
// });
