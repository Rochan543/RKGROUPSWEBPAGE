// Static platform data
const platforms = [
  {
    name: "GeeksforGeeks",
    logo: "assets/gfg.png",
    link: "https://www.geeksforgeeks.org"
  },
  {
    name: "HackerRank",
    logo: "assets/hackerrank.png",
    link: "https://www.hackerrank.com"
  },
  {
    name: "LeetCode",
    logo: "assets/leetcode.png",
    link: "https://leetcode.com"
  }
];

// Dynamically render platform cards
function renderPlatforms() {
  const container = document.querySelector(".platforms");

  platforms.forEach((platform) => {
    const div = document.createElement("div");
    div.className = "platform";
    div.innerHTML = `
      <img src="${platform.logo}" alt="${platform.name}" />
      <p>${platform.name}</p>
    `;
    div.addEventListener("click", () => handleClick(platform));
    container.appendChild(div);
  });

  // Highlight last clicked platform
  const last = localStorage.getItem("lastClickedPlatform");
  if (last) {
    const platformEls = document.querySelectorAll(".platform");
    platformEls.forEach((el) => {
      if (el.textContent.trim() === last) {
        el.classList.add("highlighted");
      }
    });
  }
}

// Handle platform click
function handleClick(platform) {
  console.log("Clicked:", platform.name);
  localStorage.setItem("lastClickedPlatform", platform.name);
  showModal(platform.name, platform.link);
}

// Create and display modal
function showModal(name, link) {
  const modal = document.createElement("div");
  modal.className = "custom-modal";
  modal.innerHTML = `
    <div class="modal-content">
      <h3>Redirecting to ${name}</h3>
      <p>Do you want to proceed to ${name}?</p>
      <button onclick="window.open('${link}', '_blank'); closeModal()">Yes</button>
      <button onclick="closeModal()">Cancel</button>
    </div>
  `;
  document.body.appendChild(modal);
}

// Remove modal
function closeModal() {
  const modal = document.querySelector(".custom-modal");
  if (modal) modal.remove();
}

// Initialize
document.addEventListener("DOMContentLoaded", renderPlatforms);
