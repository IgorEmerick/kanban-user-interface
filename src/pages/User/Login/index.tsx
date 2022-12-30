import axios from 'axios';
import { ChangeEvent, useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { EmptyContainer } from '../../../Components/EmptyContainer';
import { useAuth } from '../../../hooks/useAuth';
import {
  InputLabel,
  InputDiv,
  LoginDiv,
  Title,
  Input,
  LoginButton,
  CreateAccountLink,
} from './styles';

interface IAuthenticationResponse {
  token: string;
}

export function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(useAuth());
  const [createAccount, setCreateAccount] = useState(false);

  const changeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const changePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const authenticate = useCallback(async () => {
    try {
      const { data } = await axios.post<IAuthenticationResponse>(
        `${process.env.REACT_APP_SERVER_URL}/user/authenticate`,
        { email, password },
      );

      localStorage.setItem('@token', JSON.stringify(data.token));

      setAuthenticated(true);
    } catch (error: any) {
      Swal.fire(
        String(error.response.status),
        error.response.data.message,
        'error',
      );
    }
  }, [email, password]);

  const redirectToCreateAccount = useCallback(() => {
    setCreateAccount(true);
  }, []);

  return authenticated ? (
    <Navigate to="/" />
  ) : createAccount ? (
    <Navigate to="/create-account" />
  ) : (
    <EmptyContainer>
      <LoginDiv>
        <Title>Kanban Board</Title>

        <InputDiv margin_top="2.1875rem">
          <InputLabel>Email:</InputLabel>

          <Input onChange={changeEmail} />
        </InputDiv>

        <InputDiv margin_top="0.875rem">
          <InputLabel>Password:</InputLabel>

          <Input onChange={changePassword} type="password" />
        </InputDiv>

        <LoginButton onClick={authenticate}>Log In</LoginButton>

        <CreateAccountLink onClick={redirectToCreateAccount}>
          create account
        </CreateAccountLink>
      </LoginDiv>
    </EmptyContainer>
  );
}
