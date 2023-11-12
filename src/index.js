const express = require('express');
const app = express();
const routes = require('./routers/routes');



app.use(express.json());

app.use(routes);

app.listen(3000, () => {
    console.log("Server is up and running in port 3000");
});


