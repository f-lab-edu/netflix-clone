import ModalMovie from "@/app/(afterLogin)/@modal/(.)contents/[cid]/_component/modal-movie";
import ModalTv from "@/app/(afterLogin)/@modal/(.)contents/[cid]/_component/modal-tv";

async function ContentsModal({
  params,
  searchParams,
}: {
  params: { cid: string };
  searchParams: { mediaType: string; seasonNumber?: string };
}) {
  const id = params.cid;
  const mediaType = searchParams.mediaType;

  return (
    <>{mediaType === "movie" ? <ModalMovie id={id} /> : <ModalTv id={id} />}</>
  );
}

export default ContentsModal;
