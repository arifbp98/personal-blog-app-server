const express = require('express');
const logger = require('morgan');
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT
const cors = require("cors")

const blogsRoutes = require('./routes/blogsRoute')

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());

app.use('/api/blogs', blogsRoutes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

module.exports = app;
