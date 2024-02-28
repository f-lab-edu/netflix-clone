import Link from "next/link";
import {
  CheckedIcon,
  CheckInCircle,
} from "@/app/(beforeLogin)/signup/_component/icon";

function SignupPage() {
  const list = [
    { id: 1, description: "無약정, 無위약금. 해지도 쿨하게 언제든지." },
    { id: 2, description: "하나의 요금으로 즐기는 끝없는 콘텐츠의 세계." },
    { id: 3, description: "모든 디바이스에서 무제한 시청." },
  ];
  return (
    <>
      <div className={"w-full border-t"} />
      <section className={"flex flex-col items-center"}>
        <CheckInCircle />
        <div className={"flex flex-col border-2 py-16 px-5 rounded-3xl"}>
          <h1 className={"text-2xl text-center"}>
            원하는 멤버십을 <br />
            선택하세요.
          </h1>
          <div>
            <ul className={"w-60 mt-5 flex flex-col justify-center "}>
              {list.map((l) => (
                <li key={l.id} className={" flex mt-5"}>
                  <CheckedIcon />
                  {l.description}
                </li>
              ))}
            </ul>
          </div>
          <Link
            className={"w-full rounded-md mt-10 p-4 bg-red-700 text-center"}
            href={"/signup/planform"}
          >
            동의하고 계속
          </Link>
        </div>
      </section>
    </>
  );
}

export default SignupPage;
