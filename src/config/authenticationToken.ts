export function authenticationToken(): string | null {
  return localStorage.getItem('@token');
}
