const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));
// In-memory storage for incidents
let incidents = [];

/*
  GET /incidents
  Returns all existing incidents
*/
app.get('/incidents', (req, res) => {
    res.json(incidents);
});

/*
  POST /incidents
  Creates a new incident
*/
app.post('/incidents', (req, res) => {
    const incident = {
        id: incidents.length + 1,
        title: req.body.title,
        status: "OPEN"
    };
    incidents.push(incident);
    console.log("New incident created:", incident);
    res.json(incident);
});

/*
  PUT /resolve/:id
  Marks an incident as RESOLVED
*/
app.put('/resolve/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const incident = incidents.find(i => i.id === id);

    if (incident) {
        incident.status = "RESOLVED";
        res.json(incident);
    } else {
        res.status(404).send("Incident not found");
    }
});
// Health check endpoint (used in monitoring)
app.get('/health', (req, res) => {
    res.status(200).json({
        status: "UP",
        uptime: process.uptime(),
        timestamp: Date.now()
    });
});
// Start server only if run directly
if (require.main === module) {
    app.listen(8080, '0.0.0.0', () => {
        console.log("Server running on port 8080");
    });
}

module.exports = app;