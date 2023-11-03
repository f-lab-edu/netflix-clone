export default function CardSkeleton({ styles, loading }) {
  return (
    <div
      className={`border rounded flex justify-center items-center ${styles}`}
    >
      <span className={`loading loading-spinner ${loading}`} />
    </div>
  );
}
