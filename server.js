const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require("morgan")
const imagesRouter = require("./routes/images.js");
require("dotenv").config();
require("./config/db.connections.js")

const { PORT } = process.env;

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(morgan("dev")); 
app.use(cors());

app.use("/images", imagesRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));