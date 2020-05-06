const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/', (request, response) => {
    response.json({ hello: 'world' });
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));