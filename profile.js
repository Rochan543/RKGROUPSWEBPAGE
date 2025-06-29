// ✅ Save all profile fields to localStorage
function saveProfileData() {
  const fieldIds = [
    "fullName", "college", "area", "phone",
    "email", "linkedin", "leetcode", "hackerrank"
  ];

  fieldIds.forEach(id => {
    const value = document.getElementById(id)?.value.trim();
    if (value) {
      localStorage.setItem(`repati_${id}`, value);
    }
  });
}

// ✅ Load all profile fields from localStorage
function loadProfileData() {
  const fieldIds = [
    "fullName", "college", "area", "phone",
    "email", "linkedin", "leetcode", "hackerrank"
  ];

  fieldIds.forEach(id => {
    const stored = localStorage.getItem(`repati_${id}`);
    if (stored) {
      document.getElementById(id).value = stored;
    }
  });

  const photoPreview = document.getElementById("photoPreview");
  const storedPhoto = localStorage.getItem("repati_user_photo");
  if (storedPhoto && photoPreview) {
    photoPreview.src = storedPhoto;
    photoPreview.style.display = "block";

    // ✅ Show remove button if photo exists
    const btns = document.getElementById("photoButtons");
    if (btns) btns.style.display = "block";
  }

  const resumeLabel = document.getElementById("resumeLabel");
  const resumeName = localStorage.getItem("repati_resume_name");
  if (resumeName && resumeLabel) {
    resumeLabel.textContent = resumeName;
  }
}

// ✅ Handle image preview and store photo
document.getElementById("photo").addEventListener("change", function (e) {
  const file = e.target.files[0];
  const preview = document.getElementById("photoPreview");
  const btns = document.getElementById("photoButtons");

  if (file && preview) {
    const reader = new FileReader();
    reader.onload = function (event) {
      preview.src = event.target.result;
      preview.style.display = "block";
      localStorage.setItem("repati_user_photo", event.target.result);

      // ✅ Show remove button when photo is added
      if (btns) btns.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// ✅ NEW: Remove photo logic
document.getElementById("removePhotoBtn")?.addEventListener("click", function () {
  localStorage.removeItem("repati_user_photo");

  const preview = document.getElementById("photoPreview");
  if (preview) {
    preview.src = "";
    preview.style.display = "none";
  }

  const btns = document.getElementById("photoButtons");
  if (btns) btns.style.display = "none";
});

// ✅ Store resume file name (only name shown, not content)
document.getElementById("resume").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    localStorage.setItem("repati_resume_name", file.name);
    document.getElementById("resumeLabel").textContent = file.name;
  }
});

// ✅ Handle form submission
document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();
  saveProfileData();
  alert("Profile saved successfully!");
  window.location.href = "home.html";
});

// ✅ Load stored data on page load
window.addEventListener("DOMContentLoaded", loadProfileData);
