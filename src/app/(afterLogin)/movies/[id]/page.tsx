import Genres from "@/components/movies/genres";
import MoviesInfo from "@/components/movies/movies-info";

export default function MoviesPage({ params }: { params: { id: string } }) {
  return (
    <section>
      <Genres params={params.id} />
      <MoviesInfo genres={params.id} />
    </section>
  );
}
