"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import EmailForm from "@/app/(beforeLogin)/_component/email-form";
import Background from "@/app/(beforeLogin)/_component/background";

export default function Home() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = inputRef.current!.value;
    router.push(`/login?email=${email}`);
  };

  return (
    <section>
      <Background />
      <div className={"absolute w-full text-center top-1/2 "}>
        <h1 className="mb-5 text-5xl font-bold ">
          영화, 시리즈 등을 무제한으로
        </h1>
        <p className="mb-5">
          어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.
        </p>
        <EmailForm ref={inputRef} onSubmit={onSubmit} />
      </div>
    </section>
  );
}
