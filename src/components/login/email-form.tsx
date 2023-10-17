import { ForwardedRef, forwardRef } from "react";

export default forwardRef(function EmailForm(
  props: { onSubmit: () => void },
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <form onSubmit={props.onSubmit}>
      <h3>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </h3>
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
