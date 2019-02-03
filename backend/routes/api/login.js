var Post = require('./models/post')
app.post('/api/posts', function (req, res, next) {
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  })
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.json(201, post)
  })
})






const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// @route   POST api/login
router.post('/', (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);
    const email = req.body.email;
    const password = req.body.password;

    if(!isValid) {
        return res.status(400).json(errors);
    }
    
    User.findOne({email})
        .then(user => {
            if(!user){
                errors.email = 'User email not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = {id: user.id, name: user.name, money:user.money};
                        
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                        });
                    }
                    else{
                        errors.password = 'Incorrect Password';
                        return status(400).json(errors);
                    }
                });
        });
});

module.exports = router;
