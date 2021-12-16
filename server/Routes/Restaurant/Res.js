const express = require("express");
const { GetRes, UpdateRes } = require("../../controller/Res")

const router = express.Router();

router.get('/', GetRes)
router.post('/update', UpdateRes);

module.exports = router;