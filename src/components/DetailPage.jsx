// src/pages/DetailPage.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { MdCameraRoll } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";


import {
  DetailContainer,
  Title,
  Details,
  Poster,
  Overview,
  OverviewStyle,
  ReleaseDate,
  Rating,
  Genres,
  SectionTitle,
  Director,
  CastList,
  CastItem,
  Detail
} from "../components/style-component";  // 스타일 컴포넌트 가져오기

const DetailPage = () => {
  const { movieId } = useParams(); //movieId값 받아오기
  const [movie, setMovie] = useState(null); 
  const [credits, setCredits] = useState(null);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => { //컴포넌트 렌더링 될 때
    const fetchMovieDetail = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko`
        ); //패치 완료까지 기다림
        const data = await res.json(); 
        setMovie(data);
      } catch (err) {
        console.error("영화 상세 정보 불러오기 실패:", err);
      }
    };

    const fetchCredits = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=ko`
        );
        const data = await res.json();
        setCredits(data);
      } catch (err) {
        console.error("감독/출연 정보 불러오기 실패:", err);
      }
    };

    fetchMovieDetail();
    fetchCredits();
  }, [movieId, API_KEY]);

  if (!movie || !credits) return <div>Loading...</div>;

  return (
    <DetailContainer>
      <Poster posterPath={movie.poster_path}>
      <Detail> <p>
        <Title>
          <RiMovie2Fill style={{ marginRight: "10px" }} />
          {movie.title}
        </Title> 
        <OverviewStyle><Overview>{movie.overview}</Overview></OverviewStyle>
        <Details><ReleaseDate>
          <MdDateRange style={{ marginRight: "5px" }} />
          개봉일: {movie.release_date}
        </ReleaseDate>
        <Rating>
          <FaStar style={{ marginRight: "5px" }} />
          평점: {movie.vote_average}
        </Rating>
        <Genres>
          <TbMovie style={{ marginRight: "5px" }} />
          장르: {movie.genres.map((genre) => genre.name).join(", ")}
        </Genres></Details></p>
        </Detail>
      </Poster>

      <SectionTitle>
        <MdCameraRoll style={{ marginRight: "8px" }} />
        감독
      </SectionTitle>
      <ul>
      <Director>
        {credits.crew
          .filter((member) => member.job === "Director")
          .map((director) => director.name)
          .join(", ")}
      </Director>
      </ul>
      <SectionTitle><div>
        <MdPeopleAlt style={{ marginRight: "8px" }} />
        출연</div>
      </SectionTitle>
      <CastList>
        {credits.cast.slice(0, 5).map((actor) => (
          <CastItem key={actor.id}>
            {actor.name}
            <p>{actor.character}</p>
          </CastItem>
        ))}
      </CastList>
    </DetailContainer>
  );
};

export default DetailPage;
