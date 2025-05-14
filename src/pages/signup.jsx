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
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .max(16, "비밀번호는 최대 16자 이하이어야 합니다.")
    .required("비밀번호는 필수 항목입니다."),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인은 필수 항목입니다."),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`회원가입 실패: ${errorData.message || "알 수 없는 오류"}`);
        return;
      } //이미 가입한 이메일일 경우 오류 

      const result = await response.json();
      alert("회원가입 성공!");
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    } catch (error) {
      console.error("에러 발생:", error);
      alert("서버 오류로 회원가입 실패");
    }
  };

  return (
    <div>
      <SignLogTitle>회원가입</SignLogTitle>
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

        <InputField
          type="password"
          placeholder="비밀번호를 다시 입력해주세요!"
          {...register("passwordCheck")}
        />
        {errors.passwordCheck && <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>}

        <SubmitButton type="submit" disabled={!isValid}>
          회원가입
        </SubmitButton>
      </FormContainer>
    </div>
  );
};

export default SignUpPage;
