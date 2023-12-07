import Image from "next/image";
import Link from "next/link";
import StarIcon from "@/components/ui/star";
import { addMyList } from "@/services/contents";
import { useUserDispatch, useUserState } from "@/context/user-context";

export default function CardItem({
  id,
  mediaType,
  posterPath,
  inMyList,
}: {
  id: number;
  mediaType?: string;
  posterPath?: string;
  inMyList: boolean;
}) {
  const { sessionId } = useUserState();
  const dispatch = useUserDispatch();
  const onClickStar = async () => {
    await addMyList(sessionId, mediaType, id, !inMyList);
    return inMyList ? dispatch({ type: "REMOVE_MYLIST", id, mediaType }) : dispatch({ type: "ADD_MYLIST", id, mediaType });
  };
  return (
    <Link
      href={`/contents/${id}?&mediaType=${mediaType}`}
      className={"h-[393px]"}
    >
      <Image
        className={
          "w-full h-full border rounded cursor-pointer hover:scale-95 "
        }
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={"movie-poster"}
        width={500}
        height={500}
      />
      <div className={"relative"}>
        <div
          className={"absolute bottom-0 right-0 mr-3 mb-3"}
          onClick={onClickStar}
        >
          {inMyList ? (
            <StarIcon key={id} isMyList={true} />
          ) : (
            <StarIcon key={id} />
          )}
        </div>
      </div>
    </Link>
  );
}
