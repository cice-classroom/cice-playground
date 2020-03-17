export class AuthManager {
  isAuthenticated() {
    return localStorage.getItem('access_token') !== null
  }
}
