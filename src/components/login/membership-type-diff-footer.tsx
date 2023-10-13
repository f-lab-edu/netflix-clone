import Link from "next/link";

export default function MembershipTypeDiffFooter() {
  return (
    <>
      <div className={" flex justify-center mb-2"}>
        <Link className={"border px-16 rounded-md"} href={"#"}>
          모든 멤버십 확인하기
        </Link>
      </div>
      <div className={""}>
        <div>
          광고형 멤버십에는 몇 가지 차이점이 있습니다.
          <span>광고형 멤버십에 대해 알아보세요.</span>
        </div>
        <p>
          <small className={"block"}>
            광고형 멤버십을 선택하면, 맞춤형 광고와 Netflix의 개인정보
            처리방침에 부합하는 기타 목적을 위해 생년월일을 제공해 주셔야
            합니다.
          </small>
          <small className={"block"}>
            HD(720p), 풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는
            인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다. 모든
            콘텐츠가 모든 화질로 제공되지는 않습니다. 자세한 내용은 이용 약관을
            확인하세요.
          </small>
          <small className={"block"}>
            함께 거주하는 사람들만 계정을 함께 이용할 수 있습니다. 프리미엄
            멤버십은 동시접속 4명, 스탠다드 또는 광고형 스탠다드는 2명, 베이식은
            1명까지 가능합니다.
          </small>
        </p>
      </div>
      <div className={"flex justify-center"}>
        <Link
          className={"w-96 rounded-md mt-5 p-4 bg-red-700 text-center"}
          href={"/signup/payment-picker"}
        >
          다음
        </Link>
      </div>
    </>
  );
}
