const express = require("express");
const dotenv = require("dotenv");
const swaggerSetup = require("./config/swagger");
const router = require("./routes/api");
const path = require("path");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

swaggerSetup(app);
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(router);

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
