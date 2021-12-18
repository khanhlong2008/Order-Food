const router = require("express-promise-router")()
const BillController = require('../controller/Bill')
const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')


router.route('/')
  .get(BillController.index)
  .post(BillController.newBill)


router.route('/:billID')
  .get(validateParam(schemas.isSchema, 'billID'), BillController.getBill)
  .put(validateParam(schemas.isSchema, 'billID'), BillController.replaceBill)
  .patch(validateParam(schemas.isSchema, 'billID'), BillController.updateBill)


module.exports = router;
