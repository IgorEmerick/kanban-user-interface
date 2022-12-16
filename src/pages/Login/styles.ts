import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #242424;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
`;

export const LoginDiv = styled.div`
  width: 20rem;
  height: 21.5625rem;
  margin: auto;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background: #d9d9d9;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 3rem;
  color: #798d77;
`;

export const EmailLabel = styled.h2`
  width: 17.5rem;
  margin-top: 2.4375rem;

  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: #042e00;
  text-align: left;
`;

export const PasswordLabel = styled.h2`
  width: 17.5rem;
  margin-top: 0.875rem;

  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: #042e00;
  text-align: left;
`;

export const Input = styled.input`
  width: 17.5rem;
  height: 1.5rem;
  margin-top: 0.375rem;
  border: 0.0625rem solid #546053;
  border-radius: 0.3125rem;
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  background: #ffffff;
  align-items: center;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  color: #042900;
`;
