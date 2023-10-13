export default function MembershipBenefits({ membershipDescription }) {
  return (
    <>
      <div className={"text-center"}>
        <h1 className={"text-3xl"}>원하는 멤버십을 선택하세요</h1>
      </div>
      <div className={"mt-3"}>
        <ul>
          {membershipDescription.map((md, index) => (
            <li key={index} className={"flex"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-red-600 stroke-2 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              {md.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
