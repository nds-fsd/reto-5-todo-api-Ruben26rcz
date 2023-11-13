const express = require('express');
const todoRouter = require('./todo');

const router = express.Router();

router.use('/todo', todoRouter)
// router.use ('/user', userRouter)

module.exports = router;