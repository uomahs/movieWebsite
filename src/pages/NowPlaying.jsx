import { useEffect, useState } from "react";
import MovieList from "../pages/MovieList"; 
import {
  PaginationWrapper,
  PageButton,
  PageNumber,
} from "../components/style-component"; 

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]); // NowPlaying 영화 목록 
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // page 값이 변경될 때마다 실행되는 useEffect: 해당 페이지의 영화 목록 요청
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko&page=${page}`
        ); // API를 통해 현재 상영 중인 영화 가져오기
        const data = await res.json();
        setMovies(data.results); // 영화 데이터 저장
      } catch (err) {
        console.error("API 불러오기 실패:", err); // 에러 발생
      }
    };

    fetchNowPlaying();
  }, [API_KEY, page]); 

  // 이전 버튼 클릭 시 페이지 감소 
  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  // 다음 버튼 클릭 시 페이지 증가
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <MovieList movies={movies} />
      {/*MovieList 컴포넌트 재사용*/}
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
