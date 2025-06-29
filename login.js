// login.js
import { signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { auth, provider } from "./firebase-config.js";

// Email/Password login
window.loginUser = function (event) {
  event.preventDefault();

  const email = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Welcome, ${user.email}`);
      window.location.href = "main.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};

// Google Sign-In
function googleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`Welcome, ${user.displayName}`);
      window.location.href = "home.html";
    })
    .catch((error) => {
      console.error("Google Sign-In Error:", error.code, error.message);
      alert("Google Sign-In failed: " + error.message);
    });
}

// ✅ Safely bind button click after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("googleSignInBtn");
  if (btn) btn.addEventListener("click", googleSignIn);
});
