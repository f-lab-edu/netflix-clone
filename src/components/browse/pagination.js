function Pagination({ page }) {
  const pageSlots = [1, 2, 3, 4];

  return (
    <div className={"flex mb-1 justify-end"}>
      {pageSlots.map((value, idx) => {
        return (
          <div
            key={idx}
            className={
              value === page
                ? `w-4 mr-2 border border-slate-400 `
                : `w-4 mr-2 border border-slate-700 `
            }
          />
        );
      })}
    </div>
  );
}

export default Pagination;
