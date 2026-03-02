# User Guide

## Running the Application

### Using Docker

1. Navigate to infrastructure/docker
2. Run:

docker compose up --build

3. Open browser:
http://localhost:8080/incidents

## API Usage

### Create Incident

POST /incidents

Example Body:
{
  "title": "Server Crash"
}

### View Incidents

GET /incidents

### Resolve Incident

PUT /resolve/{id}