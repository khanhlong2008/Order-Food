const { Bill } = require('../models/Schema')


const getBill = async (req, res, next) => {
    // console.log("req params: ", req.params);
  const { billID } = req.value.params

    const bill = await Bill.findById(billID)
    // console.log("user info", user)

    return res.status(200).json({ bill })
}
const index = async (req, res, next) => {
    const bills = await Bill.find({})
    return res.status(200).json({ bills })
}


const newBill = async (req, res) => {
    try {

      const newBill = new Bill(req.body);
        await newBill.save();

      return res.status(201).json({ bill: newBill })
    } catch (err) {
      console.log(err)
        res.status(500).json({ error: err })
    }
}

const replaceBill = async (req, res, next) => {
  const { billID } = req.value.params
    const newBill = req.body
    const result = await Bill.findByIdAndUpdate(billID, newBill)
    return res.status(200).json({ success: true })
}


const updateBill = async (req, res, next) => {
  const { billID } = req.value.params;
  const newBill = req.body;
    const result = await Bill.findByIdAndUpdate(billID, newBill)

    return res.status(200).json({ success: true })
}



module.exports = { index, newBill, replaceBill, updateBill, getBill }