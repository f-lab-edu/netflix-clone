"use client";

import { useState } from "react";
import { CheckInCircle } from "@/components/icon";
import MembershipTypeInfoTable from "@/components/login/membership-type-info-table";
import MembershipTypeDiffFooter from "@/components/login/membership-type-diff-footer";
import MembershipBenefits from "@/components/login/membershipBenefits";

function PlanFormPage() {
  const [membership, setMembership] = useState("standard");
  const membershipDescription = [
    { description: "TV, 컴퓨터, 스마트폰, 태블릿으로 마음껏 시청하세요." },
    { description: "취향에 꼭 맞는 콘텐츠를 추천해 드립니다." },
    { description: "멤버십은 언제든지 변경 또는 해지 가능합니다." },
  ];
  const tr = [
    {
      id: 1,
      td: ["해상도", "영상 화질", "월 요금", "동시 접속자 수", "저장"],
      membership: "",
      memhershipKo: "",
    },
    {
      id: 2,
      td: ["1080p", "매우 좋음", "5,900", "2", "true"],
      membership: "advertisement",
      memhershipKo: "광고형",
    },
    {
      id: 3,
      td: ["1080p", "매우 좋음", "12,900", "2", "true"],
      membership: "standard",
      memhershipKo: "스탠다드",
    },
    {
      id: 4,
      td: ["4K+HDR", "가장 좋음", "16,500", "4", "true"],
      membership: "premium",
      memhershipKo: "프리미엄",
    },
  ];
  const handleChecked = (e) => {
    setMembership(e.target.value);
  };
  return (
    <>
      <div className={"w-full border-t"} />
      <section className={"flex flex-col items-center"}>
        <CheckInCircle />
        <div className={"w-[620px] border-2 py-16 px-5 rounded-3xl"}>
          <MembershipBenefits membershipDescription={membershipDescription} />
          <div className={"flex justify-end mt-5"}>
            {tr.map((row) => (
              <div key={row.id}>
                <label
                  className={`block ${row.membership === "" ? "" : "p-10"} ${
                    membership === row.membership ? "bg-red-700" : "bg-red-500"
                  }`}
                >
                  <span>{row.memhershipKo}</span>
                  <input
                    type={"radio"}
                    className={"w-0 h-0"}
                    value={row.membership}
                    name={row.membership}
                    checked={membership === row.membership}
                    onChange={handleChecked}
                  />
                </label>
              </div>
            ))}
          </div>
          <MembershipTypeInfoTable tr={tr} membership={membership} />
          <MembershipTypeDiffFooter />
        </div>
      </section>
    </>
  );
}

export default PlanFormPage;
