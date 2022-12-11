import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';

export function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
