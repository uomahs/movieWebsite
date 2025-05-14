import React from "react";
import { SearchStyle, SidebarStyle, LogoStyle,MovieStyle } from "./style-component";
import { FaSearch } from "react-icons/fa";
import { MdMovie } from "react-icons/md";


const Sidebar = () => {
  return (
    <div>
      <SidebarStyle />
      <LogoStyle to="/">YEWON</LogoStyle>
      
      {/* 검색 아이콘 + 텍스트 묶기 */}
      <SearchStyle to="/search">
        <FaSearch style={{ marginRight: "10px" }} />
        찾기
      </SearchStyle>

      <MovieStyle to="/movielists">
        <MdMovie  style={{ marginRight: "10px" }} />
        영화
      </MovieStyle>
    </div>
  );
};

export default Sidebar;
