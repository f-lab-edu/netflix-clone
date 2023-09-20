function LoginFooter() {
  return (
    <div className={"text-center  mt-4 mb-12 mx-12"}>
      <div className={"text-sm"}>
        넷 뿌려젔스 회원이 아닌가요? <a className={""}>지금 가입하세요.</a>
      </div>
      <p className={"text-xs mt-4"}>
        이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
        확인합니다.
        <button className={"ml-2"}>자세히 알아보기.</button>
      </p>
    </div>
  );
}

export default LoginFooter;
