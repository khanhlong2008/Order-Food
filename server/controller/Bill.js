const { Bill } = require('../models/Schema')

const CreateBill = async (req, res) => {
    try {
        const newBill = req.body;

        const bill = new Bill(newBill);
        await bill.save();

        res.status(200).json(bill)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}
// app.use('/bill', Bill)
const GetBill = async (req, res) => {
    const bills = await Bill.find({})
    return res.status(200).json({ bills })
}
const UpadteBill = async (req, res) => {
    try {
        const UpadteBill = req.body;

        const bill = await Bill.findOneAndUpdate(
            { _id: UpadteBill._id },
            UpadteBill,
            { new: true }
        );

        res.status(200).json(bill);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
module.exports = { GetBill, CreateBill, UpadteBill }