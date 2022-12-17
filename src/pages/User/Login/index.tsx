import { EmptyContainer } from '../../../Components/EmptyContainer';
import {
  InputLabel,
  InputDiv,
  LoginDiv,
  Title,
  Input,
  LoginButton,
  CreateAccountLink,
} from './styles';

export function Login(): JSX.Element {
  return (
    <EmptyContainer>
      <LoginDiv>
        <Title>Kanban Board</Title>

        <InputDiv margin_top="2.1875rem">
          <InputLabel>Email:</InputLabel>

          <Input />
        </InputDiv>

        <InputDiv margin_top="0.875rem">
          <InputLabel>Password:</InputLabel>

          <Input type="password" />
        </InputDiv>

        <LoginButton>Log In</LoginButton>

        <CreateAccountLink>create account</CreateAccountLink>
      </LoginDiv>
    </EmptyContainer>
  );
}
