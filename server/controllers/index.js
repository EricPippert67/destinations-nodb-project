const express = require("express");
const cors= require("cors");
const dctrl= require('./dcontroller');

const app = express();
const port = 5500;


app.use(cors())
app.use(express.json())

app.get('/api/destination', dctrl.getDestination);
app.post('/api/destination',dctrl.newDestination)
app.put('/api/destination/:id',dctrl.updateDestination)
app.delete('/api/destination/:id',dctrl.deleteDestination)





app.listen(port, ()=> console.log(`Server running I think on Port: ${port}`));