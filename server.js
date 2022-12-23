const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { readdirSync } = require("fs");
require("dotenv").config();

//const api = require('./routes/api.js')
const db = require('./database/db.js')

const app = express();

app.use(cors());
app.use(express.json());

try {
  db.authenticate()
    console.log('Connection to database successfully.');
 }catch(error){
    console.error('Unable to connect to the database: ', error);
 };

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors());

//Route => http://localhost:8000/api/
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));


app.listen(8000, () => {
  console.log("Server running in http://localhost:8000/")
});