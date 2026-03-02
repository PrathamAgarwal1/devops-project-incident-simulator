# Design Document

## Architecture Overview

The system is a simple REST API built using Node.js and Express.

### Components
- Express Server (Application Layer)
- Docker Container (Deployment Layer)
- GitHub Actions (CI/CD Layer)

## Incident Flow

1. User creates incident via POST request
2. Incident stored in memory
3. User resolves incident via PUT request
4. Status updated to RESOLVED

## Deployment Design

- Application containerized using Docker
- CI pipeline builds and tests application on every push