// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Load everything once DOM is ready
  document.addEventListener("DOMContentLoaded", async () => {
    // 1. Visitor Counter
    // Inside DOMContentLoaded
try {
  const visitRes = await fetch("https://u6g7y30ag0.execute-api.us-east-1.amazonaws.com/prod/visitor");
  const visitData = await visitRes.json();
  const visitorEl = document.getElementById("total-visits"); // This is the right ID based on HTML
  if (visitorEl) visitorEl.textContent = visitData.visitor_count;
} catch (err) {
  console.error("Error fetching visitor count:", err);
}

  
    // 2. Deploy Timestamp
    try {
      const deployRes = await fetch("https://surya.connectliftmate.com/deploy.json");
      const deployData = await deployRes.json();
      const deployEl = document.getElementById("last-deploy");
      if (deployEl) deployEl.textContent = deployData.timestamp;
    } catch (err) {
      console.error("Error fetching deploy timestamp:", err);
      const deployEl = document.getElementById("last-deploy");
      if (deployEl) deployEl.textContent = "Unavailable";
    }
  
    // 3. Dark Mode Setup
    const body = document.body;
    const toggleBtn = document.getElementById("theme-toggle");
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      toggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });
  
  // Navbar shadow and scroll-to-top
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  
    document.getElementById("scrollTop").style.display = window.scrollY > 300 ? "block" : "none";
  });
  
  // Scroll-to-top button
  document.getElementById("scrollTop").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Hamburger nav
  document.getElementById("hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
  });
  