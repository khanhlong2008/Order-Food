const express = require("express");
// const { GetBill, CreateBill, UpadteBill } = require('../../controller/Bill')
const router = require("express-promise-router")()
const BillController = require('../../controller/Bill')

// router.get('/', GetBill);

// router.post('/', CreateBill);

// router.post('/update', UpadteBill);

router.route('/')
    .get(BillController.index)
    .post(BillController.newBill)
router.route('/:billID')
    .get(BillController.getBill)
    .put(BillController.replaceBill)
    .patch(BillController.updateBill)


module.exports = router;
