import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  background-color: black;
  border-bottom: 1px solid #ccc;
  margin-left: 200px;

  .button-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const MovielistBtnStyle = styled(Link)`
  color: pink;
  font-size: 18px;
  text-decoration: none;
  font-weight: 700;
  min-width: 100px;
  padding: 20px 12px;
  text-align: center;

  &:hover {
    color: hotpink;
  }
`; // 컴포넌트가 호버되었을 때 컬러 변경


export const LogoStyle = styled(Link)`
  color: pink;
  font-size: 40px;
  text-decoration: none;
  font-weight: bold;
  margin-left: 45px;
  top: -50px;
  height: 50px;
  position: relative; // z-index가 적용되려면 필수!
  z-index: 10;        // Sidebar보다 위로!
  &:hover {
    color: hotpink;
  }
`;


export const LoginButton = styled(Link)`
  color: pink;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  padding: 6px 12px;
  margin-left: 680px;
  &:hover {
    color: hotpink;
  }
`;

export const IdStyle = styled.div`
  color: pink;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  margin-left: 400px;
`;

export const LogoutStyle = styled(Link)`
  color: pink;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  margin-top: -30px;
  margin-left: 700px;
  &:hover {
    color: hotpink;
  }
`;

export const SignupButton = styled(Link)`
  color: pink;
  padding: 6px 12px;
  text-decoration: none;
  font-weight: 700;
  outline: none;     
  min-width: 70px;
  text-align: center; 
  &:hover {
    color: hotpink;
  }
`;

export const BackgroundStyle = styled.div`
  margin: 300px;
  display: flex;
  justify-content: center;
  background-color: black;
  font-weight: 900;
  margin-left: 400px;
  font-size: 50px;
`; // 환영합니다 글씨

export const LoginTitle = styled.h1`
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: black;
  margin-left: 200px;
`; //로그인 페이지 글씨

export const SignUpStyle = styled.h1`
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: black;
  margin-left: 200px;
`; //회원가입 페이지 글씨

export const UpComingStyle = styled.h1`
  color: white;
  text-align: center;
  align-items: center;
`;
export const TopRatedStyle = styled.h1`
  color: white;
  text-align: center;
  align-items: center;
`;
export const NowPlayingStyle = styled.h1`
  color: white;
  text-align: center;
  align-items: center;
`;
export const PopularStyle = styled.h1`
  color: white;
  text-align: center;
  align-items: center;
  
`;


export const NowPlayingBtn = styled(Link)`
  color: pink;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  border: 3px solid pink;
  padding: 6px 12px;
  border-radius: 4px;
  &:hover {
    color: hotpink;
  }
`;

export const TopRatedBtn = styled(Link)`
  color: pink;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  border: 3px solid pink;
  padding: 6px 12px;
  border-radius: 4px;
  &:hover {
    color: hotpink;
  }
`;

export const PopularBtn = styled(Link)`
  color: pink;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  border: 3px solid pink;
  padding: 6px 12px;
  border-radius: 4px;
  &:hover {
    color: hotpink;
  }
`;

export const UpComingBtn = styled(Link)`
  color: pink;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  border: 3px solid pink;
  padding: 6px 12px;
  border-radius: 4px;
  &:hover {
    color: hotpink;
  }
`;

export const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: black;
  margin-left: 225px;
  
`;

export const SearchStyle =styled(Link)`
  z-index: 10;        // Sidebar보다 위로!
  position: relative;
  color: pink;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  margin-left: -160px;
  padding: 3px 12px;
  &:hover {
    color: hotpink;
  }
`
export const MovieStyle =styled(Link)`
  z-index: 10;
  position: relative;  
  bottom:-35px;  
  color: pink;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  margin-left: -78px;
  padding: 3px;
  margin-top: 50px;
  &:hover {
    color: hotpink;
  }
`

export const SidebarStyle = styled.div`
  width: 200px;
  height: 100%;
  background-color: #111;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5; // 낮게 설정해서 로고가 위로 보이도록
`;


{/* */}
export const DetailContainer = styled.div`
  text-align: center;
  max-width: 950px;
  margin-left: 450px;
  p{
    margin-left:300px; 
  };
`;
export const OverviewStyle = styled.h5`
  text-align: center;
  max-width: 950px;
  margin-left: -135px;
`;

export const Detail=styled.h1`
  width: 750px;
  text-align: center;
  margin-left: 130px;
`
export const Details=styled.h1`
  width: 700px;
  text-align: center;
  margin-left: -100px;
`
export const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 20px;
  width: 800px;
  color: #white;

`;
export const Poster = styled.div`
  width: 400px;
  height: 600px;
  position: relative;
  background-image: 
    url(${(props) => `https://image.tmdb.org/t/p/w500${props.posterPath}`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  gap: 12px;
  margin-left: -100px;
`;



export const Overview = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 20px;
  color: #white;
  width: 500px;
  margin-left: 200px;
`;

export const ReleaseDate = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #white;
`;

export const Rating = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #ffcc00;
`;

export const Genres = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #white;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 30px;
  color: #white;
`;

export const Director = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  color: #white;
`;

export const CastList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
  
`;

export const CastItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #white;

  p {
    margin: 0;
    color: gray;
  }
`;

{/**/}


export const SignLogTitle = styled.h1`
  margin-top: 20px;
  color: #white;
  font-size: 30px;
  width: 700px;
  margin-left: 800px;
  margin-top: 100px;
  font-weight: bold;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 800px;
  width: 400px;
`;

export const InputField = styled.input`
  padding: 12px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  padding-right: 50px;
  width: 210px;
`;


export const ErrorMessage = styled.p`
  margin-left: 700px;
  color: red;
  margin: 0 0 10px 4px;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  color: black;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#ff69b4")};
  //props.disabled가 true면 ->회색 (조건 만족 x)
  //props.disabled가 false면 -> 분홍색 (조건 만족)
`;

export const SearchButton= styled.div`
  background-color: pink;
  display: flex;
  align-items: center;
  margin-top: -50px;
  margin-left: 500px;
  width: 900px;
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 12px;
  align-items: center;
  margin-left: 250px;
`;


export const PageButton = styled.button`
  margin-left: 20px;
  margin-right: 20px;

  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "pink")};
  color: black;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

export const PageNumber = styled.span`
  font-weight: bold;
  font-size: 18px;
`;


export const SearchResultStyle= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: black;
  margin-left: 250px;
`