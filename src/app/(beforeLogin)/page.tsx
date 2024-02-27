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
        <h1 className="mb-5 text-5xl font-bold ">요즘 대세 영화, TV</h1>
        <p className="mb-5">
          아직 못 보셨나요? 언제 어디서든 자유롭게 확인해보세요. MZ와 같은 길을
          걸어갈 수 있습니다.
        </p>
        <EmailForm ref={inputRef} onSubmit={onSubmit} />
      </div>
    </section>
  );
}
