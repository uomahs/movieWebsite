import React, { useState } from 'react'; // 훅 사용 위해해
import { Link } from "react-router-dom";

const MoviePoster = ({ movie }) => { // 영화 포스터 컴포넌트 정의
  const [isHovered, setIsHovered] = useState(false);
  // 마우스 올라갔는지 안 올라갔는지 확인하기 위한!! (초기값false로 꺼져있는 상태로 시작작)
  const posterStyle = {
    width: '150px', //포스터 가로 크기 
    height: '225px', //포스터 세로 크기기
    borderRadius: '10px', //포스터 끝 둥글리기
    opacity: isHovered ? 0.4 : 1, // 마우스 오버 시 투명도 조절 (함수 작동 여부를 ?연산자로...) )
    dispdisplay: 'flex'
  }; 
  const backgroundStyle={
    margin: '8px'
  };
  const titleStyle={
    fontSize:'12px',
    margin: '5px 0',
    width: '150px',    
    wordWrap: 'break-word',     // 단어 단위 줄바꿈
  };
  const dateStyle={ 
    fontSize: "8px",
  };
  // 인라인스타일 (JS객체로 CSS 작성, React에서 사용 가능)

  return (
    <div
      style={backgroundStyle}
      onMouseEnter={() => setIsHovered(true)} //마우스가 올라오면 true로=> 검은 배경
      onMouseLeave={() => setIsHovered(false)} //마우스가 내려가면 false로=> 검은 배경 취소
    >
      <Link to={`/movies/${movie.id}`}>
      <img
        style={posterStyle}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      /></Link>
      <h2 style={titleStyle}>{movie.title}</h2>
      <p style={dateStyle}>Release Date: {movie.release_date}</p>
      
    </div>
  );
};

export default MoviePoster; //컴포넌트 이름 MoviePoster로 전달
