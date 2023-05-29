const Order = require('../models/Order');
const { verify, verifyTokenAuth, verifyTokenAdmin } = require('./verifyToken');

const router = require('express').Router();

// Create
router.post('/', verifyTokenAuth, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update
router.put('/:id', verifyTokenAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete
router.delete('/:id', verifyTokenAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json('Order has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get User Order
router.get('/find/:userid', verifyTokenAuth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userid });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All
router.get('/', verifyTokenAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Montly Income

module.exports = router;
