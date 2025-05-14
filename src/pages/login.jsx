import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import {
  FormContainer,
  InputField,
  ErrorMessage,
  SubmitButton,
  SignLogTitle,
} from "../components/style-component";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("유효한 이메일 형식이 아닙니다.")
    .required("이메일은 필수 항목입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 항목입니다."),
});

const LoginPage = () => {
  const navigate = useNavigate(); // navigate 훅 사용
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // onSubmit 사용 
  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // 데이터를 json형식으로 바꿔서 로컬호스트에 보내기 
      
      const result = await res.json();
      alert("로그인 성공!");
  
      // AccessToken과 RefreshToken을 로컬스토리지에 저장
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);
  
      // 메인 페이지로 이동
      navigate("/");
  
    } catch (error) {
      console.error("에러 발생:", error);
      alert("서버 오류로 로그인 실패");
    }
  };
  

  return (
    <div>
      <SignLogTitle>로그인</SignLogTitle>
      <FormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <InputField
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...register("password")}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <SubmitButton type="submit" disabled={!isValid}>
          로그인
        </SubmitButton>
      </FormContainer>
    </div>
  );
};

export default LoginPage;
