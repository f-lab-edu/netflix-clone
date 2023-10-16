"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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
    try {
      e.preventDefault();
      const formData = {};

      // const response = await fetch(
      //   "https://netflix-clone-f3b17-default-rtdb.firebaseio.com/user.json",
      //   {
      //     method: "POST",
      //     body: JSON.stringify(formData),
      //   },
      // ).then((res) => res.status);

      alert("로그인 성공!");

      router.replace("/browse");
    } catch (err) {
      console.error(err);
    }
  };

  return (
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
          <a href="#" className="label-text-alt link link-hover text-white">
            도움이 필요하신가요?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
}

export default Login;
