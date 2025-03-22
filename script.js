document.querySelectorAll('a[href^="#"]').forEach((e) => {
    e.addEventListener("click", function (e) {
        e.preventDefault(), document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
}),
    document.addEventListener("DOMContentLoaded", async function () {
        try {
            let e = await fetch("https://u6g7y30ag0.execute-api.us-east-1.amazonaws.com/prod/visitor"),
                t = await e.json();
            document.getElementById("visitor-counter").textContent = `Visitors: ${t.visits}`;
        } catch (r) {
            console.error("Error fetching visitor count:", r);
        }
    }),
    window.addEventListener("scroll", () => {
        let e = "",
            t = document.querySelectorAll("section"),
            r = document.querySelectorAll(".nav-links a");
        t.forEach((t) => {
            let r = t.offsetTop,
                s = t.clientHeight;
            scrollY >= r - s / 3 && (e = t.getAttribute("id"));
        }),
            r.forEach((t) => {
                t.classList.remove("active"), t.getAttribute("href").slice(1) === e && t.classList.add("active");
            });
    });
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    window.scrollY > 50 ? navbar.classList.add("scrolled") : navbar.classList.remove("scrolled");
});
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    toggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
window.addEventListener("scroll", () => {
    document.getElementById("scrollTop").style.display =
      window.scrollY > 300 ? "block" : "none";
  });
  document.getElementById("scrollTop").onclick = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });
  