import { authenticationToken } from '../config/authenticationToken';

export function useAuth(): boolean {
  return !!authenticationToken();
}
