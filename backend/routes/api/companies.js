const express = require('express');
const router = express.Router();

// @route   GET api/companies
router.get('/companies', (req,res) => res.send({msg: "companies Work"}));

module.exports = router;