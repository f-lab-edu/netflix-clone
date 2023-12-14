import Genres from "@/components/series/genres";
import SeriesInfo from "@/components/series/series-info";

export default function SeriesPage({ params }: { params: { id: string } }) {
  return (
    <section>
      <Genres params={params.id} />
      <SeriesInfo genres={params.id} />
    </section>
  );
}
