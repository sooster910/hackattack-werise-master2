const express = require('express');
const router = express.Router();

const Resources = require('../../models/Resources');

// @route   GET api/resources

// get all
router.get('/all', (req, res) => {
    Resources.find({},function(err, items) {
        if(err) {
            console.log(err);
        } 
        else {  
            res.json(items);
        }
     })
});


// get category advance
router.get('/all/advance', (req, res) => {
     Resources.find({category: req.params.category})
         .where("category").ne(null)
         .where('category').equals('advance')
         .then(category => {
             res.json(category);
         })
         .catch(err => 
             res.status(404).json({error: err})
        );
});

// intermediate
router.get('/all/intermediate', (req, res) => {
     Resources.find({category: req.params.category})
         .where("category").ne(null)
         .where('category').equals('intermediate')
         .then(category => {
             res.json(category);
         })
         .catch(err => 
             res.status(404).json({error: err})
        );
});

router.get('/all/begin', (req, res) => {
     Resources.find({category: req.params.category})
         .where("category").ne(null)
         .where('category').equals('begin')
         .then(category => {
             res.json(category);
         })
         .catch(err => 
             res.status(404).json({error: err})
        );
});


// create a post
router.post('/',(req, res) => {
    console.log('req.body.title', req.body)
    const resources = {};
    resources.title = req.body.title;
    resources.link = req.body.link;
    resources.image = req.body.image;
    resources.description = req.body.description;
    resources.category = req.body.category;
    
    new Resources(resources).save().then(resources => res.json(resources));
});

module.exports = router;

