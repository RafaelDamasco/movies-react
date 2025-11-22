import { MovieCard } from "@/components/MovieCard";
import type { MoviesResponse } from "@/services/movies";
import { useLoaderData } from "react-router";

export function Home() {
  const data = useLoaderData<MoviesResponse>();
  return (
    <div className="grid grid-cols-6 gap-4 ">
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
