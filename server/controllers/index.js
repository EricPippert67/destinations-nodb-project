const express = require("express");
const cors= require("cors");
const destctrl= require('../controllers/destcontroller');

const app = express();
const port = 5500;

app.use(cors())
app.use(express.json())






app.listen(port, ()=> console.log(`Server running I think on Port: ${port}`));