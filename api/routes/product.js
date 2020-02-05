const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    // res.status(200).json({
    //     message: 'Handling a get Request to /products ...'
    // })
    res.status(200).send(Product);
});

router.get('/:prodcutId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
});

router.post('/', (req, res, next) => {

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });

    res.status(201).json({
        message: 'Handling a post Request to /products...',
        createdProduct: product
    });
});

module.exports = router;