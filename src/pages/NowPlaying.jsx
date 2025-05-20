import { useEffect, useState } from "react";
import MovieList from "../pages/MovieList";
import { PaginationWrapper, PageButton, PageNumber } from "../components/style-component";

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko&page=${page}`
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error("API 불러오기 실패:", err);
      }
    };

    fetchNowPlaying();
  }, [API_KEY, page]);

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <MovieList movies={movies} />

      <PaginationWrapper>
        <PageButton onClick={handlePrev} disabled={page === 1}>
          이전
        </PageButton>
        <PageNumber>{page}</PageNumber>
        <PageButton onClick={handleNext}>다음</PageButton>
      </PaginationWrapper>
    </div>
  );
};

export default NowPlayingPage;
