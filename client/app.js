const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
app.use(cors({
  origin:"*"
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// -------------- Deployment ----------------
const __dirname1 = path.resolve();
// Serve the frontend build in production
app.use(express.static(path.join(__dirname1, "/frontend/build")));

// Handle all routes to serve the index.html
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
);
// -------------- Deployment ----------------

const port = process.env.PORT || 3000;
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
