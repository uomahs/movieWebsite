import { useEffect, useState } from "react";
import MovieList from "../pages/MovieList";

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko&page=1`
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error("API 불러오기 실패:", err);
      }
    };

    fetchNowPlaying();
  }, [API_KEY]);

  return (
    <div>
      <MovieList movies={movies} />  {/* movies를 MovieList에 전달 */}
    </div>
  );
};

export default NowPlayingPage;
