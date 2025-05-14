import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  NavbarStyle,
  MovielistBtnStyle,
  LoginButton,
  SignupButton,
  UpComingBtn,
  PopularBtn,
  NowPlayingBtn,
  TopRatedBtn,
  IdStyle,
  LogoutStyle,

} from "./style-component";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부 관리
  const [nickname, setNickname] = useState(""); // 닉네임 관리

  const accessToken = localStorage.getItem("accessToken");
  //accessToken 관리리

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    setNickname("");
    navigate("/login");
  }; // 로그아웃시 accessToken과 refreshToken 모두 삭제
    // 로그인 상태 false로 바꾼 뒤 닉네임 삭제, 로그인페이지로 이동

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!accessToken) return; //토큰이 없으면 

      try {
        const res = await fetch("http://localhost:3000/user/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }); // Bearer 방식으로 로컬호스트에서 accessToken 가져오기


        const data = await res.json();
        const nicknameFromEmail = data.email.split("@")[0];
        // 아이디를 닉네임으로 사용
        setNickname(nicknameFromEmail);
        // 닉네임 저장
        setIsLoggedIn(true);
        // 로그인 완료

      } catch (err) {
        console.error(err);
        setIsLoggedIn(false);
        localStorage.removeItem("accessToken");
        // 에러 발생시 로그아웃하고 accessToken 삭제
      }
    };

    fetchUserInfo();
  }, [accessToken]);

  return (
    <NavbarStyle>
      <MovielistBtnStyle to="/movies">영화목록</MovielistBtnStyle>
      <nav>
        {isLoggedIn ? ( 
          <>
            <IdStyle>{nickname} 님, 반갑습니다</IdStyle>
            <LogoutStyle onClick={handleLogout}>로그아웃</LogoutStyle>
          </> // 로그인 성공하면 
        ) : (
          <>
            <LoginButton to="/login">로그인</LoginButton>
            <SignupButton to="/signup">회원가입</SignupButton>
          </> // 로그아웃 상태라면
        )}
      </nav>
      <div className="button-group">
        <PopularBtn to="/popular">인기영화</PopularBtn>
        <NowPlayingBtn to="/nowplaying">개봉중인영화</NowPlayingBtn>
        <TopRatedBtn to="/toprated">평점높은영화</TopRatedBtn>
        <UpComingBtn to="/upcoming">개봉예정영화</UpComingBtn>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
