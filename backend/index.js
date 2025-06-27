const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, "db.json");

function readDB() {
  const data = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

app.get("/destinations", (req, res) => {
  const db = readDB();
  res.json(db.destinations);
});

app.get("/hotels", (req, res) => {
  const db = readDB();
  res.json(db.hotels);
});

app.get("/search", (req, res) => {
  const { destination, destinationId } = req.query;

  const db = readDB();

  let filteredHotels;

  if (destinationId) {
    const destObj = db.destinations.find(d => d.id === Number(destinationId));
    if (!destObj) {
      return res.status(400).json({ error: "Invalid destinationId" });
    }
    filteredHotels = db.hotels.filter(
      hotel => hotel.city.toLowerCase() === destObj.label.toLowerCase()
    );
  } else if (destination) {
    filteredHotels = db.hotels.filter(
      hotel => hotel.city.toLowerCase() === destination.toLowerCase()
    );
  } else {
    return res.status(400).json({ error: "Missing 'destination' or 'destinationId' query parameter" });
  }

  res.json(filteredHotels);
});

app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
