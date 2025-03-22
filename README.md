# 🚀 Cloud Resume Challenge – Surya Madireddy

Hi, I’m **Surya Madireddy**, a DevOps & Cloud Engineer with a passion for building secure, scalable, and automated cloud applications. This project is my implementation of the [Cloud Resume Challenge](https://cloudresumechallenge.dev), designed to showcase real-world skills in AWS, CI/CD, and frontend/backend integration.

> ✅ Not just a resume — it’s a live, serverless cloud application.

---

## 🌐 Live Demo

📎 **[https://surya.connectliftmate.com](https://surya.connectliftmate.com)**  
*(Hosted on AWS S3 with CloudFront and deployed via GitHub Actions)*

---

## 🧰 Technologies Used

| Layer        | Tools & Services |
|--------------|------------------|
| Frontend     | HTML, CSS, JavaScript |
| Hosting      | Amazon S3 + CloudFront |
| API          | AWS API Gateway |
| Backend      | AWS Lambda (Python) |
| Database     | AWS DynamoDB |
| CI/CD        | GitHub Actions |

---

## 🏗️ Project Architecture

This resume integrates a static frontend, serverless backend, and CI/CD automation using AWS services and GitHub.

### 🌐 Static Website Hosting

User ↓ CloudFront (CDN + HTTPS) ↓ S3 Bucket (Static Resume Files)


- HTML, CSS, JS are hosted in an **S3 bucket**
- Delivered globally and securely using **CloudFront**
- Fully responsive and optimized for performance

---

### 🔁 Real-Time Visitor Counter (API)

JavaScript fetch() ↓ API Gateway (Public Endpoint) ↓ AWS Lambda (Python) ↓ DynamoDB (Counter Storage) ↓ Returns Count → Injected into DOM


- The visitor count is stored in **DynamoDB**
- A **Python Lambda** reads and increments the value
- **API Gateway** exposes the function via a REST endpoint
- JavaScript fetches and renders it on page load

---

### ⚙️ CI/CD Pipeline – GitHub Actions

Push to main branch ↓ GitHub Actions Workflow ↓ aws s3 sync → uploads to S3 ↓ aws cloudfront create-invalidation


#### 🔄 `deploy.yml` Workflow

- Trigger: Push to `main`
- Steps:
  - Checkout repo
  - Configure AWS credentials via GitHub Secrets
  - Deploy to S3 (excluding `.git`, `.DS_Store`, etc.)
  - Invalidate CloudFront cache for real-time updates

---

## ✨ Frontend Features (script.js)

- Smooth scroll for anchor links
- Section highlight on scroll (scroll spy)
- Sticky navbar style change on scroll
- Dark mode toggle (with localStorage support)
- Animated back-to-top button
- Dynamic visitor count via `fetch`

---

## 🎨 Styling Highlights (styles.css)

- Modern layout with **CSS Grid** & **Flexbox**
- Color theming using **CSS variables**
- Light/Dark mode with smooth transitions
- Hover states, animation (`pulse`), and shadows

---

## 🧠 Key Learnings

- Infrastructure as Code mindset using AWS-native services
- Real-world deployment workflows via GitHub Actions
- Serverless backend design with API Gateway + Lambda + DynamoDB
- Building responsive, dynamic UIs without frameworks

---

## 📬 Contact

📧 Email: [msvpavanreddy@gmail.com](mailto:msvpavanreddy@gmail.com)  
💼 LinkedIn: [linkedin.com/in/surya-m0299](https://linkedin.com/in/surya-m0299)  
💻 GitHub: [SuryaMadireddy1](https://github.com/SuryaMadireddy1)

---

> “Your resume shouldn’t just talk about your skills — it should run them.”  
> — Surya Madireddy

---

## 🙌 Thank You!

Thanks for visiting my project. If it helped or inspired you, feel free to ⭐ the repo or connect on LinkedIn. Let’s build something awesome together 🚀
