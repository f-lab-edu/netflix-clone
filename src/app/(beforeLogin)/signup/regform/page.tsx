"use client";

import { CheckInCircle } from "@/components/icon";
import { useFormState, useFormStatus } from "react-dom";
import onSubmit from "../_lib/signup";

const showKoMessage = (message: string | null) => {
  if (message === "no_email") return "이메일을 확인해주세요.";
  if (message === "no_password") return "비밀번호를 확인해주세요.";
  if (message === "no_required_option")
    return "개인정보 처리방침에 동의해주셔야합니다.";
  return "";
};

function RegFormPage() {
  const [state, formAction] = useFormState(onSubmit, { message: null });
  const { pending } = useFormStatus();

  return (
    <>
      <div className={"w-full border-t"} />
      <section className={"flex flex-col items-center"}>
        <CheckInCircle />
        <form action={formAction} className={"border-2 py-16 px-5 rounded-3xl"}>
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
                id="email"
                type="email"
                name="email"
                className={"input w-full text-black"}
              />
              <input
                id="password"
                type="password"
                name="password"
                className={"input w-full text-black mt-3"}
                placeholder={"비밀번호를 추가하세요."}
              />
            </div>
            <div className={"terms mt-3"}>
              <div className="flex">
                <input
                  id="required_option"
                  name="required_option"
                  type="checkbox"
                  className="checkbox checkbox-success cursor-pointer"
                  required
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
                />
                <p className="pl-3 label-text text-white ">
                  예, 넷뿌러졌스 특별 할인 알림 이메일을 보내주세요. (선택 사항)
                </p>
              </div>
            </div>
          </div>
          <div>
            <small className={" text-red-500 mt-1 "}>
              {showKoMessage(state?.message)}
            </small>
          </div>
          <button
            type="submit"
            className={"w-full rounded-md mt-5 p-4 bg-red-700"}
            disabled={pending}
          >
            동의하고 계속
          </button>
        </form>
      </section>
    </>
  );
}

export default RegFormPage;
