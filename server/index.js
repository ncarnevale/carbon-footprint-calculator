const express = require("express");
const {getTransportationCarbon} = require('./getTransportationCarbon');
const {getEnergyCarbon} = require('./getEnergyCarbon');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/transportation", (req, res) => {
    res.json(getTransportationCarbon(req.query));
});

app.get("/api/energy", (req, res) => {
    res.json(getEnergyCarbon(req.query));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});