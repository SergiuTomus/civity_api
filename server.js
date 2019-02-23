const app = require('./app');

const port = process.env.PORT || 3005; // process.env.PORT is defined in deployment

// localhost:3005
app.listen(port);