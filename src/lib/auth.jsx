export function login(email, password) {
  if (email === "user@example.com" && password === "123456") {
    localStorage.setItem("loggedIn", "true");

    // 🔔 notify navbar
    window.dispatchEvent(new Event("auth-change"));
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem("loggedIn");
  window.dispatchEvent(new Event("auth-change"));
}

export function isLoggedIn() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("loggedIn") === "true";
}
