const { PORT, NODE_ENV } = require('./util/config');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

//use routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
