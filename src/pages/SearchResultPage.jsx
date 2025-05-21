import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviePoster from "../components/MoviePoster";
import {SearchResultStyle, SearchButton } from "../components/style-component";
import { useNavigate } from "react-router-dom";


const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}&language=ko`
        );
        const data = await res.json();
        setResults(data.results);
      } catch (err) {
        console.error("검색 실패:", err);
      }
    };

    fetchResults();
  }, [query, API_KEY]);

  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
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
              onChange={(e) => setInputValue(e.target.value)}
              style={{ padding: "8px", width: "800px", marginRight: "10px" }}
            />
            <button type="submit" style={{ width: "50px", color: "black" }}>
              검색
            </button>
          </SearchButton>
        </form>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        <SearchResultStyle>
          {results.length > 0 ? (
            results.map((movie) => <MoviePoster key={movie.id} movie={movie} />)
          ) : (
            <p style={{margin: "0px 500px"}}>해당하는 검색어 {query}에 해당하는 데이터가 없습니다.</p>
          )}
        </SearchResultStyle>
      </div>
    </div>
  );
};

export default SearchResultsPage;
