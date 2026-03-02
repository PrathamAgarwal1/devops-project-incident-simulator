# API Documentation

## Base URL
http://localhost:8080

---

## GET /incidents
Returns all incidents.

Response:
[
  {
    "id": 1,
    "title": "Server Crash",
    "status": "OPEN"
  }
]

---

## POST /incidents
Creates a new incident.

Request Body:
{
  "title": "Database Failure"
}

---

## PUT /resolve/{id}
Marks incident as resolved.