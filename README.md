## CI-CD Project using Express API and Docker

🚀 Overview
- This project is a Node.js Express API with a full CI/CD pipeline using GitHub Actions. It includes code linting, automated tests, and Docker deployment to DockerHub.

✅ Features

- REST API built using Express

- Unit and integration tests with Jest and Supertest

- Code linting with ESLint

- GitHub Actions workflow for CI/CD

- Dockerized deployment

📂 Project Structure

- src folder for application and server files

- tests folder for API test files

- .eslintrc.json configuration for linting

- Dockerfile for containerization

- GitHub workflow file under .github/workflows/

⚙️ Scripts

- npm run lint → Runs ESLint checks

- npm test → Runs Jest tests

- npm run build → Simulated build step

🤖 CI/CD Workflow

- The pipeline runs on push or pull request to the main branch. The jobs include:

- Lint → Run ESLint to check code quality

- Test → Run Jest test suite

- Build → Execute build script (simulated step)

- Docker Deploy → Build and push Docker image to DockerHub

🐳 Docker Setup

- Application is containerized using a Dockerfile

- Exposes port 3000 by default

- Docker image can be built and pushed to DockerHub

🔑 GitHub Secrets

- To enable DockerHub deployment, configure these secrets in your GitHub repository settings:

- DOCKERHUB_USERNAME

- DOCKERHUB_PASSWORD or access token

📌 How to Run Locally

- Clone the repository

- Run npm install

- Run npm run lint to check code style

- Run npm test to execute tests

- Start the server with Node or build/run via Docker
