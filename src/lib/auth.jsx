// Mock auth using localStorage
export function isLoggedIn() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("loggedIn") === "true";
}

export function login(email, password) {
  // Hardcoded credentials
  if (email === "user@example.com" && password === "123456") {
    localStorage.setItem("loggedIn", "true");
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem("loggedIn");
}
