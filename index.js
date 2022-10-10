const connectToMongo = require('./db');
const cors = require('cors');

const express = require("express");
connectToMongo();

const app = express();

const PORT = 8081;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hi!');
});


app.listen(PORT, () => {
    console.log(`The App is running at http://localhost:${PORT}`);
});

