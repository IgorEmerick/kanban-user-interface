import {
  Input,
  EmailLabel,
  LoginContainer,
  LoginDiv,
  Title,
  PasswordLabel,
} from './styles';

export function Login(): JSX.Element {
  return (
    <LoginContainer>
      <LoginDiv>
        <Title>Kanban Board</Title>

        <EmailLabel>Email:</EmailLabel>

        <Input />

        <PasswordLabel>Password:</PasswordLabel>

        <Input type="password" />
      </LoginDiv>
    </LoginContainer>
  );
}
