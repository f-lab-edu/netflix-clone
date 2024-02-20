import React, { ForwardedRef, forwardRef } from "react";

export default forwardRef(function EmailForm(
  props: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void },
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <form onSubmit={props.onSubmit}>
      <h3>MZ와 같이갈 준비가 되셨나요? 이메일을 입력해주세요.</h3>
      <div>
        <input
          ref={ref}
          type="text"
          placeholder="이메일 주소를 입력해주세요."
          className="input input-bordered inline-block text-black w-full max-w-xs"
        />
        <button className="btn inline-block ml-3 bg-red-500 btn-outline">
          시작하기
        </button>
      </div>
    </form>
  );
});
