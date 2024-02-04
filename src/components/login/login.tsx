"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { login } from "@/services/account/account";
import { useUserDispatch } from "@/context/user-context";

function Login({ email }: { email: string }) {
  const dispatch = useUserDispatch();
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
    // const user = await login(data);
    // if (user) {
    //   dispatch({
    //     type: "SIGN_IN",
    //     data: {
    //       accessToken: user.accessToken,
    //       sessionId: "2bc5adb67cde82f05b5cc514f01dd01b6a41954e",
    //       myList: user.myList,
    //     },
    //   });
    //   alert("즐거운 관람되세요");
    //   router.replace("/browse");
    // }
    alert("즐거운 관람되세요");
    router.replace("/browse");
  };
  return (
    <form className="card-body text-black" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <span className={"text-xs text-white"}>
          테스트 계정
          <br /> email: test@test.com, password: 123123
        </span>
      </div>
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
          type="password"
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
