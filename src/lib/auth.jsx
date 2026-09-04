export function login(email, password) {
  if (email.trim() !== "" && password.trim() !== "") {
    localStorage.setItem("loggedIn", "true");

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