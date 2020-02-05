const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders was fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'orders was created',
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(201).json({
        message: 'orders was created',
        orderId: req.params.orderId
    });
});

// router.patch('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'orders was updated'
//     });
// });

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'orders was Deleted',
        orderId: req.params.orderId
    });
});


module.exports = router;