const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const router = express.Router();

app.post('/admin', (req, res) => {
    res.send("dfd");
});


app.listen(4000);