"use client";

import Image from "next/image";
import Login from "@/components/login/login";
import LoginFooter from "@/components/login/login-footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import GoogleButton from "@/app/(beforeLogin)/login/_component/google-button";
import NaverButton from "@/app/(beforeLogin)/login/_component/naver-button";
import React from "react";
import Background from "@/app/(beforeLogin)/_component/background";

function LoginPage({ searchParams }: { searchParams: { email: string } }) {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) return router.replace("/browse");

  const email = searchParams?.email ?? "";
  console.log("google client id: ", process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

  return (
    <>
      <Background />
      <div className={"flex h-80vh justify-center items-center z-1"}>
        <div className="card max-w-sm bg-black">
          <Login email={email} />
          <div className={"flex justify-around"}>
            <GoogleButton />
            <NaverButton />
          </div>
          <LoginFooter />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
