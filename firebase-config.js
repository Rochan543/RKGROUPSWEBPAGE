// ✅ Updated import paths for browser-compatible Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXDet22dsNfIE2-B10p-0W1slAsPBUoWg",
  authDomain: "repatikosam-2b239.firebaseapp.com",
  projectId: "repatikosam-2b239",
  storageBucket: "repatikosam-2b239.appspot.com",
  messagingSenderId: "140597400452",
  appId: "1:140597400452:web:e331dcd18915a1bcc683d1",
  measurementId: "G-6CVQHYTLRW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { app, auth, provider };
