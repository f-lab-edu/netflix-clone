import DetailContent from "../../../components/contents/detail-content";

function ContentDetailPage({ params }) {
  return (
    <>
      <DetailContent id={params.cid} />
    </>
  );
}

export default ContentDetailPage;
