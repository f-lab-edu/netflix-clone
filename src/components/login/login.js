"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import LoginFooter from "./login-footer";

function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState(searchParams.get("email") ?? "");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("id, password", email, password);
    if (email.trim().length === 0 || password.trim().length === 0)
      return alert("please, email or password check!");

    const formData = {
      email: email,
      password: password,
    };

    await fetch("", {
      method: "POST",
      body: formData,
    }).then((data) => console.log(data));

    router.replace("/browse");
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
          <form className="card-body text-black" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                value={email}
                className="input input-bordered"
                onChange={onChangeEmail}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                onChange={onChangePassword}
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <LoginFooter />
        </div>
      </div>
    </div>
  );
}

export default Login;
