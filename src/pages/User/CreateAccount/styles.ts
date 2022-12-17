import styled from 'styled-components';

export const CreateAccountDiv = styled.div`
  width: 20rem;
  min-height: 24rem;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #d9d9d9;
  padding: 1.25rem;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 3rem;
  color: #798d77;
`;

export const Subtitle = styled.h2`
  margin-top: 0.125rem;

  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: #798d77;
`;

interface IInputDiv {
  margin_top?: string;
}

export const InputDiv = styled.div<IInputDiv>`
  height: 3.75rem;
  margin-top: ${props => props.margin_top || '0.875rem'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FieldLabel = styled.span`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: #042e00;
`;

export const Field = styled.input`
  width: 17.5rem;
  height: 1.5rem;
  border: 0.0625rem solid #546053;
  border-radius: 0.3125rem;
  align-items: center;
  background: #ffffff;
  padding-right: 0.375rem;
  padding-left: 0.375rem;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  color: #042900;
`;

export const CreateAccountButton = styled.button`
  width: 6.875rem;
  height: 1.875rem;
  margin-top: 1.3125rem;
  border: none;
  border-radius: 0.3125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #043300;

  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #bafab3;

  cursor: pointer;
`;
