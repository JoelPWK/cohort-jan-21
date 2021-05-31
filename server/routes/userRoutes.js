const express = require('express')
const router = express.Router()
const {User} = require ("../models/User")

//get a list of existing users
router.route('/').get( async (req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/adduser').post((req,res) => {
    const username
})


module.exports = router;

