const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const PORT = 4000;
const userRouter = require('./routes/user');

const server = express();
server.use(bodyparser.json());

server.get('/', (req, res) => {
    res.send("hello wolrd!")
})

server.use('/user', userRouter);

mongoose.connect("").then(() => {
    server.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    })
}).catch((error) => console.log("DB error: " + error))


