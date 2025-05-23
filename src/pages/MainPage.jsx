import { useEffect, useState } from "react";
import MovieList from "../pages/MovieList";
import LoadingSpinner from "../components/LoadingSpinner"

const Home = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1&region=KR`
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error("API 불러오기 실패:", err);
      }
    };

    fetchHome();
  }, [API_KEY]);

  return (
    <div>
      <MovieList movies={movies} />  {/* movies를 MovieList에 전달 */}
    </div>
  );
};

export default Home;
