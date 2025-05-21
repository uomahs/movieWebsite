import { useEffect, useState, useRef, useCallback } from "react";
import MovieList from "../pages/MovieList";
import LoadingSpinner from "../components/LoadingSpinner";

const MovieHome = () => {
  const [movies, setMovies] = useState([]); //영화 데이터 상태
  const [page, setPage] = useState(1); // 불러올 페이지 번호
  const [loading, setLoading] = useState(false);// 로딩 상태 
  const observerRef = useRef(null); // 

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


  // 영화 API 받아오기 
  const fetchMovies = async (pageToFetch) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=${pageToFetch}&region=KR`
      );
      const data = await res.json();

      setMovies((prev) => {
        const combined = [...prev, ...data.results];
        // 기존 영화 목록과 새 영화목록 합치기 

        // 영화 id를 기준으로 중복해서 뜨는 영화 삭제 
        const uniqueMoviesMap = new Map();
        combined.forEach((movie) => uniqueMoviesMap.set(movie.id, movie));
        const uniqueMovies = Array.from(uniqueMoviesMap.values());
        return uniqueMovies.slice(0);
      });
    } catch (err) {
      console.error("영화 불러오기 실패:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      fetchMovies(page);
    }
  }, [page]);
  // 페이지 바뀔 때마다 영화 데이터 로딩 (스크롤 끝나면)

  const lastDivRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        // IntersectionObserver: infinite scrolling에 필요한 브라우저 API
        
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        } // 새 페이지 요청 (스크롤 더 할 수 있게)
      });

      if (node) observerRef.current.observe(node);
    },
    [loading]
  );
  // 스크롤 끝나면 페이지 +1

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        <MovieList movies={movies} />
      </div>

      <div ref={lastDivRef} style={{ height: "1px" }} />

      {loading && <LoadingSpinner />}
    </div>
  );
};

export default MovieHome;
