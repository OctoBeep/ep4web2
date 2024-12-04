const express = require('express');
const conectarDB = require('./config/db');
const config = require('./config/global');
const cors = require('cors');
const app = express();

const initUsers = require('./initUsers');

conectarDB();

initUsers();

app.use(cors());
app.use(express.json());


app.use('/api/create-user', require('./routers/usuario'));
app.use('/api/login', require('./routers/usuario'));

app.listen(config.port, () => {
    console.log("Servidor Corriendo en el puerto", config.port);
});
