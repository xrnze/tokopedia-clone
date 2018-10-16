const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Products = require('./models/products');
const Cart = require('./models/cart');
const Kurir = require('./models/kurir')

router.get('/products',(req, res) => {
    Products.find({})
      .then(function(result){
        res.send(result)
  });
});

router.get('/products/:id', (req, res) => {
  Products.findOne({_id: req.params.id})
  .then(result => {
    res.status(200).send(result)
  })
})

router.post('/products', (req, res, next) => {
  const product = new Products({
    _id:  mongoose.Types.ObjectId(),
    ...req.body
  });
  product.save()
    .then(result => {
      res.status(201).send(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
})

router.get('/cart', (req, res) => {
  Cart.find({})
  .populate('productId')
  .exec()
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

router.post('/cart', function(req, res, next) {
  const cart = new Cart({
    _id:  mongoose.Types.ObjectId(),
    ...req.body
  });
  cart.save()
    .then( function(result) {
      res.send(result);
    })
    .catch(next)
});

router.get('/cart/:id', (req, res) => {
  Cart.findOne({_id: req.params.id})
  .populate('productId')
  .then(result => {
    res.status(200).send(result)
  })
})

router.put('/cart/:id', (req, res) => {
  Cart.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

router.delete('/cart/:id', (req, res) => {
  Cart.findOneAndDelete({_id: req.params.id})
  .then(result => res.status(200).send(result))
})

router.get('/kurir', (req, res) => {
  Kurir.find()
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    error: err
  })
})

router.post('/kurir', (req, res, next) => {
  const kurir = new Kurir({
    _id: mongoose.Types.ObjectId(),
    ...req.body
  });
  kurir.save()
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
})

router.get('/kurir/:id', (req, res) => {
  Kurir.findOne({_id: req.params.id})
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

router.delete('/cart', (req, res) => {
  Cart.deleteMany({})
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

module.exports = router;