"use client";

import Image from "next/image";
import Login from "@/components/login/login";
import LoginFooter from "@/components/login/login-footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import GoogleButton from "@/app/(beforeLogin)/login/_component/google-button";
import NaverButton from "@/app/(beforeLogin)/login/_component/naver-button";

function LoginPage({ searchParams }: { searchParams: { email: string } }) {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) return router.replace("/browse");

  const email = searchParams?.email ?? "";

  return (
    <>
      <Image
        className={"hero h-80vh opacity-60 absolute"}
        src={
          "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
        }
        alt={"background"}
        width={500}
        height={500}
      />
      <div className={"flex h-80vh justify-center items-center"}>
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
