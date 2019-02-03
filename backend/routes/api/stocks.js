const express = require('express');
const router = express.Router();
// const passport = require('passport');

const Stock = require('../../models/Stock');

// router.get('/all/:id', (req, res) => {
//      Stock.find({user: req.params.id})
//          .sort({symbol: 1})
//          .populate('user', ['name'])
//          .then(stocks => {
//              res.json(stocks);
//          })
//          .catch(err => 
//              res.status(404).json({error: err})
//         );
// });

router.post('/',(req, res) => {
    var post = new Stock({
        symbol: req.body.symbol,
        quantity: req.body.quantity
    })
    post.save(function (err, post) {
        if (err) { return next(err) }
        res.json(201, post)
  })

    // new Stock(stockFields).save().then(stock => res.json(stock));
});

module.exports = router;