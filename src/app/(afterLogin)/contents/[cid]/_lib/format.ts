import { Genre } from "@/model/media";

export const formatGenres = (genres: Genre[]) =>
  genres.map((g) => g.name + " ");
