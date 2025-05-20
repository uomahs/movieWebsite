import { useEffect, useState } from "react";
import MovieList from "../pages/MovieList";
import { PaginationWrapper, PageButton, PageNumber } from "../components/style-component";


const PopularPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); // 🔹 페이지 상태 추가
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=${page}&region=KR`
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error("API 불러오기 실패:", err);
      }
    };

    fetchPopular();
  }, [API_KEY, page]); // 🔹 page 변경 시마다 요청 다시 보내기

  // 🔹 페이지 이동 함수
  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <MovieList movies={movies} />

      {/* 🔹 페이지네이션 UI */}
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

export default PopularPage;
