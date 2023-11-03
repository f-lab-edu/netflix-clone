export default function CardSkeleton({
  styles,
  loading,
}: {
  styles: string;
  loading: string;
}) {
  return (
    <div
      className={`border rounded flex justify-center items-center ${styles}`}
    >
      <span className={`loading loading-spinner ${loading}`} />
    </div>
  );
}
