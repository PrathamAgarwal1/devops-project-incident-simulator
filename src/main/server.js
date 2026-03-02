const express = require('express');
const app = express();

app.use(express.json());

let incidents = [];

// Get all incidents
app.get('/incidents', (req, res) => {
    res.json(incidents);
});

// Create new incident
app.post('/incidents', (req, res) => {
    const incident = {
        id: incidents.length + 1,
        title: req.body.title,
        status: "OPEN"
    };
    incidents.push(incident);
    res.json(incident);
});

// Resolve incident
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

if (require.main === module) {
    app.listen(8080, () => {
        console.log("Server running on port 8080");
    });
}

module.exports = app;