// components/Spinner.jsx
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  margin: 40px auto;
  width: 48px;
  height: 48px;
  border: 5px solid #eee;
  border-top-color: #007bff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Spinner = () => <SpinnerWrapper />;

export default Spinner;
