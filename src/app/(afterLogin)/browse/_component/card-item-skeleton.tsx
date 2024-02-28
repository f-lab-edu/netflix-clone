export default function CardItemSkeleton() {
  return (
    <div className="py-1 space-x-4 bg-neutral relative h-44">
      <div className={"flex justify-between items-center w-full h-full"}>
        <div className={"h-full flex mx-2 justify-center"}>
          <button className={""}>❮</button>
        </div>
        <div className={"carousel carousel-center"}>
          <div className="carousel-item ml-2 bg-white text-black cursor-pointer">
            <div
              className={
                "w-[300px] h-[168.6px] flex justify-center items-center"
              }
            >
              <span className="loading loading-spinner loading-md" />
            </div>
          </div>
          <div className="carousel-item ml-2 bg-white text-black cursor-pointer">
            <div
              className={
                "w-[300px] h-[168.6px] flex justify-center items-center"
              }
            >
              <span className="loading loading-spinner loading-md" />
            </div>
          </div>
          <div className="carousel-item ml-2 bg-white text-black cursor-pointer">
            <div
              className={
                "w-[300px] h-[168.6px] flex justify-center items-center"
              }
            >
              <span className="loading loading-spinner loading-md" />
            </div>
          </div>
          <div className="carousel-item ml-2 bg-white text-black cursor-pointer">
            <div
              className={
                "w-[300px] h-[168.6px] flex justify-center items-center"
              }
            >
              <span className="loading loading-spinner loading-md" />
            </div>
          </div>
          <div className="carousel-item ml-2 bg-white text-black cursor-pointer">
            <div
              className={
                "w-[300px] h-[168.6px] flex justify-center items-center"
              }
            >
              <span className="loading loading-spinner loading-md" />
            </div>
          </div>
        </div>
        <div className={"h-full flex mx-2"}>
          <button className={""}>❯</button>
        </div>
      </div>
    </div>
  );
}
