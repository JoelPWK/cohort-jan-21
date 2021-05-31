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
    const {email, password} = req.body;
    
    const newUser= new User({
        email: email,
        password:password
    });

    newUser.save()
    .then(()=> res.json ('user added'))
    .catch (err => res.status(400).json ('Error: ' + err))
})


module.exports = router;

//
// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const { check, validationResult } = require('express-validator');


// router.post(
//   "/",
// //   [
// //     check("email", "Please include a valid email").isEmail(),
// //     check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 }),
// //   ],

//   async (req, res) => {
//     // const errors = validationResult(req);
//     // if (!errors.isEmpty()) {
//     //     return res.status(400).json({ errors: errors.array() });
//     // }
//     const { email, password } = req.body;

//     try {
//         // const existingEmail = await User.findOne({email})
//         // if (existingEmail) {
//         // return res
//         // .status(400)
//         // .json({errors: "Email address already registered"})       
//         // }
//         const user = new User ({
//             email: email,
//             password: password
//         })
//         await user.save()

//     } catch (err) {
//         console.error(
//             // res.status(500)
//             res.body
//             )
//     }

//   }
// );


// //         // To Do: encrypt the password

// //         // Saving the user:

// //         // const newUser = new User ({
// //         //     email,
// //         //     password
// //         // })

// //         // const savedUser = await newUser.save();

// //         // res.send(savedUser)

// //         //JWT TOKEN:

// //     } catch (err) {
// //         res
// //         .status(500)
// //         .send('error')
// //     }
// // })

// module.exports = router;
