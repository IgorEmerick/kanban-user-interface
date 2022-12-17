import styled from 'styled-components';

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

interface IInputDivProps {
  margin_top: string;
}

export const InputDiv = styled.div<IInputDivProps>`
  height: 3.75rem;
  margin-top: ${props => props.margin_top};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const InputLabel = styled.span`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: #042e00;
`;

export const Input = styled.input`
  width: 17.5rem;
  height: 1.5rem;
  border: 0.0625rem solid #546053;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
  background: #ffffff;
  padding-right: 0.375rem;
  padding-left: 0.375rem;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  color: #042900;
`;

export const LoginButton = styled.button`
  width: 6.25rem;
  height: 1.875rem;
  margin-top: 1.3125rem;
  border: none;
  border-radius: 0.3125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c8500;

  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #042900;

  cursor: pointer;
`;

export const CreateAccountLink = styled.a`
  margin-top: 1.1875rem;

  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  text-decoration-line: underline;
  color: #064800;

  cursor: pointer;
`;
