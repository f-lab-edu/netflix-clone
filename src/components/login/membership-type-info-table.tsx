export default function MembershipTypeInfoTable({
  tr,
  membership,
}: {
  tr: {
    id: number;
    td: string[];
    membership: string;
    memhershipKo: string;
  }[];
  membership: string;
}) {
  return (
    <table>
      <div className={"flex my-5"}>
        {tr.map((row) => (
          <tr key={row.id} className={"flex flex-col "}>
            {row.td.map((data, index) => (
              <td
                key={index}
                className={`py-2 ${
                  row.membership === "" ? " w-44 mr-2" : "w-32 text-center"
                }`}
              >
                <div
                  className={`font-bold ${
                    membership === row.membership ? "text-red-700 " : ""
                  }`}
                >
                  {data}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </div>
    </table>
  );
}
