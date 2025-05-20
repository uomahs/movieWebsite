import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MoviePoster from "../components/MoviePoster";
import { SearchButton } from "../components/style-component";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState(keyword);
  const navigate = useNavigate();

  useEffect(() => {
    if (!keyword) return;

    const fetchResults = async () => {
      try {
        const res = await fetch(`http://localhost:3000/search?keyword=${encodeURIComponent(keyword)}`);

        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("검색 실패:", err);
      }
    };

    fetchResults();
  }, [keyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    navigate(`/search?keyword=${encodeURIComponent(inputValue.trim())}`);
  };

  return (
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
          <button type="submit" style={{width: "50px", color:"black"}}>검색</button>
        </SearchButton>
      </form>

      <h2> 검색 결과: {keyword}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {results.length > 0 ? (
          results.map((movie) => <MoviePoster key={movie.id} movie={movie} />)
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
