"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function Login({ email }: { email: string }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: { email: email ?? "", password: "" },
  });
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      //TODO: route handler 에서 fetch

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
    <form className="card-body text-black" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Email</span>
        </label>
        <input
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: emailReg,
              message: "이메일 양식에 맞지 않습니다.",
            },
          })}
          type="text"
          placeholder="email"
          className="input input-bordered"
        />
        {errors?.email && (
          <small className={"text-red-500 mt-1"}>{errors.email?.message}</small>
        )}
        <label className="label">
          <span className="label-text text-white">Password</span>
        </label>
        <input
          {...register("password")}
          type="text"
          placeholder="password"
          className="input input-bordered"
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover text-white">
            도움이 필요하신가요?
          </a>
        </label>
      </div>
      <div className="form-control mt-3">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
}

export default Login;
