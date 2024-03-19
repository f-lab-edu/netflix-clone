"use client";

import Footer from "@/app/(beforeLogin)/login/_component/footer";
import GoogleButton from "@/app/(beforeLogin)/login/_component/google-button";
import GithubButton from "@/app/(beforeLogin)/login/_component/github-button";
import Background from "@/app/(beforeLogin)/_component/background";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

function showKoMessage(message: string | null) {
  if (message === "no_email") return "이메일을 확인하세요.";
  if (message === "no_password") return "비밀번호를 확인하세요.";
  return "";
}

function LoginPage({ searchParams }: { searchParams: { email: string } }) {
  const router = useRouter();
  const [email, setEmail] = useState(searchParams?.email ?? "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  if (session?.user) return router.replace("/browse");

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (response?.error) return "mismatch_id_password";
      alert("즐거운 관람되세요!");
      router.replace("/browse");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Background />
      <div className={"flex h-80vh justify-center items-center z-1"}>
        <div className="card max-w-sm bg-black">
          <form onSubmit={onSubmit} className="card-body text-black">
            <div className={"text-white"}>
              <small> 테스트 계정 </small>
              <br />
              <small>
                id: test@test.com <br /> password: 123123
              </small>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
                defaultValue={email}
                required
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                disabled={loading}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white"
                >
                  도움이 필요하신가요?
                </a>
              </label>
            </div>
            <div>
              <small className={" text-red-500 mt-1 "}>
                {/*{showKoMessage(state?.message)}*/}
              </small>
            </div>
            <div className="form-control mt-3">
              {loading ? (
                <button
                  className="btn btn-primary disabled:btn-primary"
                  disabled={loading}
                >
                  <span className="loading loading-spinner loading-md" />
                </button>
              ) : (
                <button className="btn btn-primary">Login</button>
              )}
            </div>
          </form>
          <div className={"flex justify-around"}>
            <GoogleButton />
            <GithubButton />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
