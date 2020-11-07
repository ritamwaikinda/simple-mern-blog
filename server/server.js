const express = require('express');
const server = express();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/simple-mern-blog`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB connection established."));



const PORT = process.env.port || 4000;
server.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));

const articleRouter = require('./article/router');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/articles', articleRouter);