"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { fireAuth } from "@/firebase";

export default async (prevState: any, formData: FormData) => {
  if (!formData.get("email") || !(formData.get("email") as string)?.trim())
    return { message: "no_email" };
  if (!formData.get("password")) return { message: "no_password" };
  if (!formData.get("required_option"))
    return { message: "no_required_option" };

  let shouldRedirect = false;

  try {
    await createUserWithEmailAndPassword(
      fireAuth,
      formData.get("email") as string,
      formData.get("password") as string,
    );

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
//const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
