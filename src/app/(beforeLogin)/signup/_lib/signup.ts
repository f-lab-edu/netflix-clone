"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export default async (prevState: any, formData: FormData) => {
  if (!formData.get("email") || !(formData.get("email") as string)?.trim())
    return { message: "no_email" };
  if (!formData.get("password")) return { message: "no_password" };
  if (!formData.get("required_option"))
    return { message: "no_required_option" };
  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      },
    );
    console.log(response.status);
    if (response.status === 403) {
      return { message: "user_exists" };
    }

    shouldRedirect = true;
    await signIn("credentials", {
      username: formData.get("email"),
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
