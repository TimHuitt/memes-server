require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require("morgan")
const imagesRouter = require("./routes/images.js");
const templatesRouter = require("./routes/templates.js");

require("./config/db.connections.js")

const { PORT } = process.env;

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(morgan("dev")); 
app.use(cors());

app.use("/create", templatesRouter);
app.use("/", imagesRouter);


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));