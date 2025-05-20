import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import Home from "./pages/MainPage";
import RootLayout from "./layout/root-layout";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import PopularPage from "./pages/PopularPage";
import NowPlayingPage from "./pages/NowPlaying";
import UpComingPage from "./pages/UpComing";
import TopRatedPage from "./pages/TopRatedPage"
import SearchPage from "./pages/Search";
import moviehome from "./pages/moviehome";
import DetailPage from "./components/DetailPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>{/*RootLayout으로 감싸 네비바, 사이드바가 항상 떠있도록*/}
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<moviehome />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="popular" element={<PopularPage />} />
          <Route path="nowplaying" element={<NowPlayingPage />} />
          <Route path="toprated" element={<TopRatedPage />} />
          <Route path="upcoming" element={<UpComingPage />} />
          <Route path="search" element={<SearchPage/>}/>
          <Route path="/movies/:movieId" element={<DetailPage />} />  {/* 상세 페이지 라우팅 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
