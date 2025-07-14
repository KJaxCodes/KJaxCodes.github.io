const express = require('express');

const app = express();

//show JSON 
app.use(express.json());

const items = require('./fakeDb');

//check the root

app.get('/', (req, res) => {
    return res.send("Shopping List");
})

//get all items
app.get('/items', (req, res) => {
    console.log("GET /items route");
    if (items.length === 0) return res.json({ message: "Cart is empty" });
    return res.json(items);
});





app.listen(4000, () => {
    console.log("Server running on port 4000")
});