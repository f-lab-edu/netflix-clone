import Image from "next/image";

export default function NaverButton() {
  return (
    <div className={"flex flex-col items-center"}>
      <button onClick={() => alert("서비스 준비중입니다.")}>
        <Image
          priority
          src={"/N.png"}
          alt={"네이버 로그인"}
          width={40}
          height={40}
        />
      </button>
      <span className={"text-xs mt-2"}>네이버로 로그인</span>
    </div>
  );
}
