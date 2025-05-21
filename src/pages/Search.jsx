import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchButton } from "../components/style-component";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    navigate(`/search/results?query=${encodeURIComponent(inputValue.trim())}`);
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
          <button type="submit" style={{ width: "50px", color: "black" }}>검색</button>
        </SearchButton>
      </form>
    </div>
  );
};

export default SearchPage;
