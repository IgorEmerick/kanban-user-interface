import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateAccount } from '../pages/User/CreateAccount';
import { Login } from '../pages/User/Login';

export function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
