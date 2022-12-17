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
  return (
    <EmptyContainer>
      <CreateAccountDiv>
        <Title>Kanban Board</Title>

        <Subtitle>Create account</Subtitle>

        <InputDiv margin_top="0.1875rem">
          <FieldLabel>Name:</FieldLabel>

          <Field />
        </InputDiv>

        <InputDiv>
          <FieldLabel>Password:</FieldLabel>

          <Field type="password" />
        </InputDiv>

        <InputDiv>
          <FieldLabel>Email:</FieldLabel>

          <Field />
        </InputDiv>

        <CreateAccountButton>Create account</CreateAccountButton>
      </CreateAccountDiv>
    </EmptyContainer>
  );
}
