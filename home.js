import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { auth } from "./firebase-config.js";

// 🟢 Show welcome name and photo
onAuthStateChanged(auth, (user) => {
  if (user) {
    const storedName = localStorage.getItem("repati_user_name");
    const name = storedName || user.displayName || user.email || "User";
    const welcomeEl = document.getElementById("welcomeUser");
    if (welcomeEl) welcomeEl.textContent = `Welcome, ${name} 👋`;

    const photoURL = localStorage.getItem("repati_user_photo");
    const photoEl = document.getElementById("userPhoto");
    if (photoEl && photoURL) photoEl.src = photoURL;
  } else {
    window.location.href = "login.html";
  }
});

// 🔴 Logout handler
window.logoutUser = function () {
  signOut(auth)
    .then(() => {
      localStorage.clear();
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Logout failed: " + error.message);
    });
};

// ✅ Live Coding Terminal Logic
const liveCodingBtn = document.getElementById("liveCodingBtn");
const container = document.getElementById("liveCodingEditorContainer");

if (liveCodingBtn && container) {
  liveCodingBtn.addEventListener("click", () => {
    container.innerHTML = `
      <div class="editor-wrapper">
        <div class="editor-header">
          <div class="left-tools">
            <label for="languageSelect">Language:</label>
            <select id="languageSelect">
              <option value="text/x-c++src">C++</option>
              <option value="text/x-java">Java</option>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
            </select>
          </div>
          <div class="right-tools">
            <button id="runBtn">Run</button>
            <button id="closeBtn">Close</button>
          </div>
        </div>
        <textarea id="codeEditor">// Write your code here...</textarea>
        <div id="editorOutput"></div>
      </div>
    `;

    const editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
      lineNumbers: true,
      mode: "text/x-c++src",
      theme: "default",
      lineWrapping: true,
    });

    // 🔁 Language dropdown change
    const languageSelect = document.getElementById("languageSelect");
    languageSelect.addEventListener("change", (e) => {
      editor.setOption("mode", e.target.value);
    });

    // ▶️ Run button
    const runBtn = document.getElementById("runBtn");
    const output = document.getElementById("editorOutput");
    runBtn.addEventListener("click", () => {
      const code = editor.getValue();
      const lang = languageSelect.value;
      output.innerText = `✅ Simulated Run in ${lang}:\n\n${code}`;
    });

    // ❌ Close button
    const closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", () => {
      const confirmClose = confirm("Are you sure you want to close the editor?");
      if (confirmClose) {
        container.innerHTML = "";
      }
    });
  });
}
