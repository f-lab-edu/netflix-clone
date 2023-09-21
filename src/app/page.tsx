"use client";

import Navbar from "@/components/ui/header";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import EmailForm from "@/components/login/email-form";

export default function Home() {
  const router = useRouter();
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = inputRef.current.value;
    router.push(`/login?email=${email}`);
  };

  return (
    <>
      <Navbar />
      <main>
        <div>
          <section>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="mb-5 text-5xl font-bold ">
                    영화, 시리즈 등을 무제한으로
                  </h1>
                  <p className="mb-5">
                    어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.
                  </p>
                  <EmailForm ref={inputRef} onSubmit={onSubmit} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
