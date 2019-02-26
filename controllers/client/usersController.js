const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models').User;

// @route   POST client/register
// @access  Public
exports.registerUser = (req, res, next) => {
    User.findOne({
        where: { email: req.body.email }
    })
        .then(user => {
            if (user) {
                return res.status(422).json({ message: "Email exists" });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {    // 10 - nr of salting rounds
                    if (err) {
                        return res.status(500).json({ error: err });
                    } else {
                        User.create({
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            password: hash,
                            phone: req.body.phone
                        })
                            .then(result => {
                                res.status(201).json({
                                    message: 'User created succesfully'
                                })
                            })
                            .catch(err => {
                                console.log("error: ", err);
                                res.status(500).json({ error: err });
                            });
                    }
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

// @route   POST client/login
// @access  Public
exports.loginUser = (req, res, next) => { };