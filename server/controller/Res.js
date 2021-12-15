const { Restaurant } = require('../models/Schema')

// const CreateRes = async (req, res) => {
//     try {
//         const newBill = req.body;

//         const bill = new Restaurant(newBill);
//         await bill.save();

//         res.status(200).json(bill)
//     } catch (err) {
//         res.status(500).json({ error: err })
//     }
// }
const GetRes = async (req, res) => {
    const ress = await Restaurant.find({})
    return res.status(200).json({ ress })
}
const UpdateRes = async (req, res) => {
    try {
        const UpdateRes = req.body;

        const ress = await Restaurant.findOneAndUpdate(
            { _id: UpdateRes._id },
            UpdateRes,
            { new: true }
        );

        res.status(200).json(ress);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
module.exports = { GetRes, UpdateRes }
// module.exports = CreateRes