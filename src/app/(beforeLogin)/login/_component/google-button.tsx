"use client";
import { signIn } from "next-auth/react";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { db, fireAuth } from "@/firebase";
import { child, get, ref, set } from "@firebase/database";
import {
  confirmToken,
  getSessionId,
  getToken,
} from "@/app/(beforeLogin)/signup/_lib/get-tmdb";

export default function GoogleButton() {
  const onClick = async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(fireAuth, provider);

    if (!response.user) return;

    const uid = response.user.uid;

    const snapshot = await get(child(ref(db), `users/${uid}`)).then(
      async (snapshot) => {
        if (!snapshot.exists()) {
          const token = await getToken();
          const confirm = await confirmToken(token);
          const sessionId = await getSessionId(token);

          await set(ref(db, "users/" + uid), {
            tmdb_session: sessionId,
            email: response.user.email,
            confirm_token: token,
          });
          const newSnapshot = await get(child(ref(db), `users/${uid}`)).then(
            (snapshot) => snapshot.val(),
          );
          return newSnapshot;
        }
        return snapshot.val();
      },
    );

    await signIn("credentials", {
      provider: "google",
      tmdb_session: snapshot.tmdb_session,
      email: response.user.email,
      redirect: false,
    });
  };
  return (
    <div className={"flex flex-col items-center"}>
      <button onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white" />
          <g clipPath="url(#clip0_710_6217)">
            <path
              d="M29.6 20.2273C29.6 19.5182 29.5364 18.8364 29.4182 18.1818H20V22.05H25.3818C25.15 23.3 24.4455 24.3591 23.3864 25.0682V27.5773H26.6182C28.5091 25.8364 29.6 23.2727 29.6 20.2273Z"
              fill="#4285F4"
            />
            <path
              d="M20 30C22.7 30 24.9636 29.1045 26.6181 27.5773L23.3863 25.0682C22.4909 25.6682 21.3454 26.0227 20 26.0227C17.3954 26.0227 15.1909 24.2636 14.4045 21.9H11.0636V24.4909C12.7091 27.7591 16.0909 30 20 30Z"
              fill="#34A853"
            />
            <path
              d="M14.4045 21.9C14.2045 21.3 14.0909 20.6591 14.0909 20C14.0909 19.3409 14.2045 18.7 14.4045 18.1V15.5091H11.0636C10.3864 16.8591 10 18.3864 10 20C10 21.6136 10.3864 23.1409 11.0636 24.4909L14.4045 21.9Z"
              fill="#FBBC04"
            />
            <path
              d="M20 13.9773C21.4681 13.9773 22.7863 14.4818 23.8227 15.4727L26.6909 12.6045C24.9591 10.9909 22.6954 10 20 10C16.0909 10 12.7091 12.2409 11.0636 15.5091L14.4045 18.1C15.1909 15.7364 17.3954 13.9773 20 13.9773Z"
              fill="#E94235"
            />
          </g>
          <rect
            x="0.5"
            y="0.5"
            width="39"
            height="39"
            rx="19.5"
            stroke="#747775"
          />
          <defs>
            <clipPath id="clip0_710_6217">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(10 10)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <span className={"text-xs mt-2"}>구글로 로그인</span>
    </div>
  );
}
