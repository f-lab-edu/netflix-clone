export default function ClientSideLoading() {
  return (
    <div className={"flex justify-center items-center h-[80vh] "}>
      <div className={"w-4/5 text-center"}>
        <span className="loading loading-dots loading-lg" />
      </div>
    </div>
  );
}
