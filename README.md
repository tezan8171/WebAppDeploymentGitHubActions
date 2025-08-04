# Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)

![Build and Deploy](https://github.com/tezan8171/WebAppDeploymentGitHubActions/actions/workflows/deploy.yml/badge.svg)

This project demonstrates the automation of building and deploying a Node.js web application using **GitHub Actions** and **Docker**.  

---

## 🚀 Objective
The main objective of this project is to:
- Automate the deployment process of a web application.
- Set up a **CI/CD pipeline** using GitHub Actions.
- Build and push Docker images to GitHub Container Registry (GHCR).

---

## 🛠️ Tools & Technologies
- **GitHub** (Version Control & Repository Management)
- **GitHub Actions** (CI/CD Pipeline)
- **Node.js** (Web Application)
- **Docker** (Containerization)

---

## 📂 Project Structure

---

## ⚡ CI/CD Workflow
1. **Trigger:** Every push to the `main` branch.
2. **Actions Performed:**
   - Checkout repository
   - Set up Node.js
   - Install dependencies
   - Build the Docker image
   - Push image to GitHub Container Registry
   - Deploy the application

---

## 🐳 Run Locally with Docker
You can run this application locally using Docker:
```bash
docker build -t webappdeploymentgithubactions/webpage .
docker run -p 80:80 webappdeploymentgithubactions/webpage
