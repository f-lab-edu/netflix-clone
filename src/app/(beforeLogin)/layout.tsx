import { ReactNode } from "react";
import Header from "@/app/(beforeLogin)/_component/header";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();

  if (session?.user) {
    redirect("/browse");
    return null;
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
}
