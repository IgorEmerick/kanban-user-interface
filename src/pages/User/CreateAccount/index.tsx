import axios from 'axios';
import { ChangeEvent, useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { EmptyContainer } from '../../../Components/EmptyContainer';
import {
  CreateAccountButton,
  CreateAccountDiv,
  Field,
  FieldLabel,
  InputDiv,
  Subtitle,
  Title,
} from './styles';

export function CreateAccount(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const changeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const changeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const changePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const checkName = useCallback((): boolean => {
    return /^[a-zA-Z][a-z]{2,}( [a-zA-Z][a-z]{2,})*$/g.test(name);
  }, [name]);

  const checkEmail = useCallback((): boolean => {
    return /^[a-zA-Z][a-zA-Z0-9._]*@[a-z]+\.[a-z]+(\.[a-z]+)?$/g.test(email);
  }, [email]);

  const createAccount = useCallback(async () => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/user`, {
        email,
        name,
        password,
      });

      Swal.fire('Success!', 'Successfuly created user!', 'success');

      setRedirect(true);
    } catch (error: any) {
      Swal.fire(
        String(error.response.status),
        error.response.data.message,
        'error',
      );
    }
  }, [email, name, password]);

  return redirect ? (
    <Navigate to="/login" />
  ) : (
    <EmptyContainer>
      <CreateAccountDiv>
        <Title>Kanban Board</Title>

        <Subtitle>Create account</Subtitle>

        <InputDiv margin_top="0.1875rem">
          <FieldLabel>Name:</FieldLabel>

          <Field onChange={changeName} />
        </InputDiv>

        <InputDiv>
          <FieldLabel>Email:</FieldLabel>

          <Field onChange={changeEmail} />
        </InputDiv>

        <InputDiv>
          <FieldLabel>Password:</FieldLabel>

          <Field onChange={changePassword} type="password" />
        </InputDiv>

        <CreateAccountButton
          disabled={!checkName() || !checkEmail || password.length === 0}
          onClick={createAccount}
        >
          Create account
        </CreateAccountButton>
      </CreateAccountDiv>
    </EmptyContainer>
  );
}
