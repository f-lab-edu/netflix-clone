"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckInCircle } from "@/components/icon";

function RegFormPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [privacyTerms, setPrivacyTerms] = useState(false);
  const [eventAlarmTerm, setEventAlarmTerm] = useState(false);
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passwordReg = /^[a-zA-Z0-9]{4,12}$/;

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      return alert("이메일 또는 비밀번호를 확인해주세요");
    }
    if (!emailReg.test(email)) {
      return console.log("email");
    }

    if (!passwordReg.test(password) || email === password) {
      return console.log("password ");
    }
    if (!privacyTerms)
      return alert("개인정보 수집 및 활용에 동의해주셔야 합니다.");

    const form = {
      email,
      password,
      privacyTerms,
      eventAlarmTerm,
    };
    // const res = await fetch(`/`, {
    //   method: "POST",
    //   body: JSON.stringify(form),
    // }).catch(err => console.error(err));
    //
    router.push("/signup");
  };
  return (
    <>
      <div className={"w-full border-t"} />
      <section className={"flex flex-col items-center"}>
        <CheckInCircle />
        <form
          onSubmit={handleSubmit}
          className={"border-2 py-16 px-5 rounded-3xl"}
        >
          <div className={"form-control flex flex-col w-108 "}>
            <h1 className={"text-2xl text-center"}>
              비밀번호를 설정해 멤버십을
              <br /> 시작하세요.
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
                onChange={onChangeEmail}
              />
              <input
                className={"input w-full text-black mt-3"}
                placeholder={"비밀번호를 추가하세요."}
                onChange={onChangePassword}
              />
            </div>
            <div className={"terms mt-3"}>
              <div className="flex">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success cursor-pointer"
                  onClick={() => setPrivacyTerms(!privacyTerms)}
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
                  onClick={() => setEventAlarmTerm(!eventAlarmTerm)}
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
