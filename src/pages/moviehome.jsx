// 영화 가져오기가 무한진행...



import { useEffect, useState, useRef, useCallback } from "react";
import MovieList from "../pages/MovieList"; // 재사용 가능해야 함
import LoadingSpinner from "../components/LoadingSpinner"; // 로딩 스피너 컴포넌트

const MovieHome = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const MAX_MOVIES = 100; // 최대 영화 개수 제한

  const fetchMovies = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=${page}&region=KR`
      );
      const data = await res.json();

      // 최대 개수에 맞게 영화 추가
      setMovies((prev) => {
        const combined = [...prev, ...data.results];
        if (combined.length >= MAX_MOVIES) {
          setHasMore(false);
          return combined.slice(0, MAX_MOVIES);
        }
        return combined;
      });

      // 기존의 페이지 기반 hasMore 체크도 유지하되,
      // 영화 개수 100개 도달 시 false로 바꾸기 때문에 중복 체크 가능
      if (page >= data.total_pages) {
        setHasMore(false);
      }
    } catch (err) {
      console.error("영화 불러오기 실패:", err);
    } finally {
      setLoading(false);
    }
  }, [API_KEY, page, loading, hasMore]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const lastMovieRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px"}}>
        {movies.map((movie, idx) => {
          if (idx === movies.length - 1) {
            return (
              <div ref={lastMovieRef} key={movie.id}>
                <MovieList movies={[movie]} /> {/* 마지막 요소에 ref */}
              </div>
            );
          }
          return <MovieList key={movie.id} movies={[movie]} />;
        })}
      </div>

      {loading && <LoadingSpinner />}
      {!hasMore && <p style={{ textAlign: "center" }}>더이상 영화를 불러올 수 없습니다.</p>}
    </div>
  );
};

export default MovieHome;
