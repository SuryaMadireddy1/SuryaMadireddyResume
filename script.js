// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((e) => {
  e.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  // 🌍 1. Visitor Counter
  try {
    const noCache = `?t=${Date.now()}`; // Avoid CloudFront cache
    const res = await fetch(`https://u6g7y30ag0.execute-api.us-east-1.amazonaws.com/prod/visitor${noCache}`);
    const data = await res.json();
    const el = document.getElementById("total-visits");
    if (el && data.visitor_count !== undefined) {
      el.textContent = data.visitor_count;
    } else {
      el.textContent = "Unavailable";
    }
  } catch (err) {
    console.error("❌ Visitor Count Error:", err);
    const el = document.getElementById("total-visits");
    if (el) el.textContent = "Unavailable";
  }

  // 📦 2. Deploy Timestamp
  try {
    const res = await fetch(`/deploy.json?t=${Date.now()}`); // Avoid cache
    const data = await res.json();
    const el = document.getElementById("last-deploy");
    if (el && data.timestamp) {
      el.textContent = data.timestamp;
    } else {
      el.textContent = "Unavailable";
    }
  } catch (err) {
    console.error("❌ Deployment Timestamp Error:", err);
    const el = document.getElementById("last-deploy");
    if (el) el.textContent = "Unavailable";
  }

  // 🌙 3. Dark Mode
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });
});

// 🚀 Navbar scroll shadow
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");

  document.getElementById("scrollTop").style.display = window.scrollY > 300 ? "block" : "none";
});

// 🔼 Scroll to top
document.getElementById("scrollTop").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 🍔 Hamburger
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});
