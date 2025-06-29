window.addEventListener("DOMContentLoaded", () => {
  const get = (id) => document.getElementById(id);

  get("displayName").textContent = localStorage.getItem("repati_fullName") || "-";
  get("displayCollege").textContent = localStorage.getItem("repati_college") || "-";
  get("displayArea").textContent = localStorage.getItem("repati_area") || "-";
  get("displayPhone").textContent = localStorage.getItem("repati_phone") || "-";
  get("displayEmail").textContent = localStorage.getItem("repati_email") || "-";

  const linkedin = localStorage.getItem("repati_linkedin");
  const leetcode = localStorage.getItem("repati_leetcode");
  const hackerrank = localStorage.getItem("repati_hackerrank");
  const resume = localStorage.getItem("repati_resume_name");
  const photo = localStorage.getItem("repati_user_photo");

  if (linkedin) get("displayLinkedIn").href = linkedin;
  if (leetcode) get("displayLeetCode").href = leetcode;
  if (hackerrank) get("displayHackerRank").href = hackerrank;
  if (resume) get("displayResume").textContent = resume;

  if (photo) get("displayPhoto").src = photo;
});
