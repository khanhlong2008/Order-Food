const express = require("express");
const { GetBill, CreateBill, UpadteBill } = require('../../controller/Bill')


const router = express.Router();

router.get('/', GetBill);

router.post('/', CreateBill);

router.post('/update', UpadteBill);


module.exports = router;