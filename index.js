const express = require("express");
require("dotenv").config();
const routes = require("./routes/mailRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", routes);

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
