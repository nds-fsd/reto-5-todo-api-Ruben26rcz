const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router');

app.use (cors());

app.use(express.json());

app.use(router);

app.listen(3001, () => {
    console.log("Server is up and running in port 3001");
});