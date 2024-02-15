"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { db, fireAuth } from "@/firebase";
import { ref, set } from "@firebase/database";
import {
  confirmToken,
  getSessionId,
  getToken,
} from "@/app/(beforeLogin)/signup/_lib/get-tmdb";

export default async (prevState: any, formData: FormData) => {
  if (!formData.get("email") || !(formData.get("email") as string)?.trim())
    return { message: "no_email" };
  if (!formData.get("password")) return { message: "no_password" };
  if (!formData.get("required_option"))
    return { message: "no_required_option" };

  let shouldRedirect = false;

  try {
    const response = await createUserWithEmailAndPassword(
      fireAuth,
      formData.get("email") as string,
      formData.get("password") as string,
    );
    // tmdb session 생성하기 위함
    const token = await getToken();
    const confirm = await confirmToken(token);
    const sessionId = await getSessionId(token);

    const uid = response.user.uid;

    // tmdb session 저장하기 위함
    await set(ref(db, "users/" + uid), {
      tmdb_session: sessionId,
      email: formData.get("email"),
      confirm_token: token,
    });

    shouldRedirect = true;

    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
  } catch (err) {
    console.error(err);
    return { message: null };
  }

  if (shouldRedirect) {
    redirect("/browse");
  }
  return { message: null };
};
