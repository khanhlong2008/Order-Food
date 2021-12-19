const { Restaurant } = require('../models/Schema')

const CreateRes = async (req, res) => {
  try {
    const newBill = req.body;

    const bill = new Restaurant(newBill);
    await bill.save();

    res.status(200).json(bill)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
const getRes = async (req, res, next) => {
  try {
    const { restaurantID } = req.value.params
    const ress = await Restaurant.findById(restaurantID)
    return res.status(200).json({ ress })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
const index = async (req, res) => {
    const ress = await Restaurant.find({})
    return res.status(200).json({ ress })
}
const replaceRes = async (req, res) => {

  try {
    const { restaurantID } = req.value.params;
    const newRestaurant = req.body;

    const result = await Restaurant.findByIdAndUpdate(restaurantID, newRestaurant)
  return res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err })
  }
};
const updateRes = async (req, res) => {

  try {
    const { restaurantID } = req.value.params
    const newRestaurant = req.body

    const result = await Restaurant.findByIdAndUpdate(restaurantID, newRestaurant)
  return res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err })
  }
};
module.exports = { index, replaceRes, updateRes, CreateRes, getRes }
