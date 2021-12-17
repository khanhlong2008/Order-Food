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
const index = async (req, res) => {
    const ress = await Restaurant.find({})
    return res.status(200).json({ ress })
}
const replaceRes = async (req, res) => {

  const { RestaurantID } = req.params;
  const newRestaurant = req.body;

  const result = await Restaurant.findByIdAndUpdate(RestaurantID, newRestaurant)
  return res.status(200).json({ success: true })
};
const updateRes = async (req, res) => {

  const { RestaurantID } = req.params;
  const newRestaurant = req.body;

  const result = await Restaurant.findByIdAndUpdate(RestaurantID, newRestaurant)
  return res.status(200).json({ success: true })
};
module.exports = { index, replaceRes, updateRes }
