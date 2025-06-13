const Order = require('../models/orderModel');

function generateOrderId() {
    const now = new Date();
    const datePart = now.toISOString().slice(0, 10).replace(/-/g, '');
    const timePart = now.toTimeString().slice(0, 8).replace(/:/g, '');
    const randomSuffix = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `ORD-${datePart}-${timePart}-${randomSuffix}`;
}

const placeOrder = async (req, res) => {
    try {
        const { name, email, cartItems, totalAmount } = req.body;

        if (!name || !email || !cartItems || cartItems.length === 0) {
            return res.status(400).json({ message: 'Invalid order data' });
        }

        const newOrder = new Order({
            orderId: generateOrderId(),
            name,
            email,
            cartItems,
            totalAmount
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully', orderId: newOrder.orderId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error while placing order' });
    }
};

module.exports = { placeOrder };