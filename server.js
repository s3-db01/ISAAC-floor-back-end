const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3005",
  credentials: true
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync();//.then(() =>{
    //console.log("Drop and re-sync db.");
//});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello wurld." });
});

require("./routes/floor.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
