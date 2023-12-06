"use client";

import { useRouter } from "next/navigation";
import { CheckInCircle } from "@/components/icon";
import { useForm } from "react-hook-form";
import { FormData } from "@/types/signup/types";
import { signup } from "@/services/account/account";

function RegFormPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      requiredTerm: false,
      optionsTerm: false,
    },
  });

  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const onSubmit = async (data: FormData) => {
    if (!data.requiredTerm)
      return alert("개인정보 수집 및 활용 동의는 필수입니다.");
    const res = await signup(data);

    router.replace("/signup");
  };

  return (
    <>
      <div className={"w-full border-t"} />
      <section className={"flex flex-col items-center"}>
        <CheckInCircle />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"border-2 py-16 px-5 rounded-3xl"}
        >
          <div className={"form-control flex flex-col w-108 "}>
            <h1 className={"text-2xl text-center"}>
              비밀번호를 설정해 멤버십을 <br /> 시작하세요.
            </h1>
            <div className={"mt-2 text-sm"}>
              몇 단계만 더 거치면 넷뿌러졌스 가입 완료! <br />
              복잡한 단계는 모두 없앴습니다.
            </div>
            <div className={"account-info"}>
              <label className={"label-text-alt text-white my-1"}>
                이메일 주소
              </label>
              <input
                className={"input w-full text-black"}
                {...register("email", {
                  required: true,
                  maxLength: 20,
                  min: 5,
                  pattern: {
                    value: emailReg,
                    message: "이메일 형식에 맞지 않습니다.",
                  },
                })}
              />
              {errors?.email && <small>{errors.email?.message}</small>}
              <input
                className={"input w-full text-black mt-3"}
                placeholder={"비밀번호를 추가하세요."}
                {...register("password", {
                  required: "비밀번호를 입력해주세요",
                })}
              />
            </div>
            <div className={"terms mt-3"}>
              <div className="flex">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success cursor-pointer"
                  {...register("requiredTerm")}
                />
                <p className="pl-3 label-text text-white">
                  예, 저는 <span>개인정보 처리방침</span>에 따른 개인정보 수집
                  및 활용에 동의합니다. <span>(상세 정보)</span>
                </p>
              </div>
              <div className={"flex"}>
                <input
                  type="checkbox"
                  className="checkbox checkbox-success cursor-pointer"
                  {...register("optionsTerm")}
                />
                <p className="pl-3 label-text text-white ">
                  예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택 사항)
                </p>
              </div>
            </div>
          </div>
          <button className={"w-full rounded-md mt-5 p-4 bg-red-700"}>
            동의하고 계속
          </button>
        </form>
      </section>
    </>
  );
}

export default RegFormPage;
