import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"; 
import MoviePoster from "../components/MoviePoster"; 
import { SearchResultStyle, SearchButton } from "../components/style-component"; 
import { useNavigate } from "react-router-dom";

const SearchResultsPage = () => {
  // URL에서 쿼리 파라미터 가져오기
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || ""; // 쿼리 문자열 없을 경우 빈 문자열 처리 (기본값)
  const [results, setResults] = useState([]); // 검색 결과 상태
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 

  // 검색어가 변경될 때마다 영화 데이터를 요청
  useEffect(() => {
    if (!query) return; // 쿼리가 없으면 요청하지 않음

    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}&language=ko`
        );
        const data = await res.json();
        setResults(data.results); // 결과 상태 업데이트
      } catch (err) {
        console.error("검색 실패:", err); // 오류 발생시
      }
    };

    fetchResults(); 
  }, [query, API_KEY]);

  // 검색 입력창 상태
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleSubmit = (event) => {
    event.preventDefault(); // 페이지 새로고침 방지
    if (inputValue.trim() === "") return; // 공백일 경우 무시
    // 검색어를 URL에 반영하여 이동
    navigate(`/search/results?query=${encodeURIComponent(inputValue.trim())}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ padding: "20px" }}>
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
          <SearchButton>
            <input
              type="text"
              placeholder="영화 제목을 입력해주세요"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)} // 입력값 업데이트
              style={{ padding: "8px", width: "800px", marginRight: "10px" }}
            />
            <button type="submit" style={{ width: "50px", color: "black" }}>
              검색
            </button>
          </SearchButton>
        </form>
      </div>

      {/* 검색 결과 리스트 */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        <SearchResultStyle>
          {results.length > 0 ? (
            // 결과가 있으면 MoviePoster 컴포넌트 렌더링
            results.map((movie) => <MoviePoster key={movie.id} movie={movie} />)
          ) : (
            // 결과가 없을 경우 메시지 출력
            <p style={{ margin: "0px 500px" }}>
              해당하는 검색어 {query}에 해당하는 데이터가 없습니다.
            </p>
          )}
        </SearchResultStyle>
      </div>
    </div>
  );
};

export default SearchResultsPage;
