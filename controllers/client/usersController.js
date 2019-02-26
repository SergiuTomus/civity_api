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
                return res.status(422).json({ message: "Email already exists" });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {    // 10 - nr of salting rounds
                    if (err) {
                        return res.status(500).json({ message: "Not a valid password", error: err });
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
                                console.log("error: ", err.errors[0].message);
                                if (err.errors[0].message == "Validation isEmail on email failed") {
                                    return res.status(500).json({ error: "Not a valid email address" });
                                }
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
exports.loginUser = (req, res, next) => {
    User.findOne({
        where: { email: req.body.email }
    })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }

            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                if (result) {
                    console.log(process.env.SECRET_KEY);
                    const token = jwt.sign(
                        {
                            email: user.email,
                            user_id: user.id
                        },
                        process.env.SECRET_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        message: "Auth successful",
                        token: token
                    })
                }
                console.log(result);
                res.status(401).json({
                    message: 'Auth failed'
                });
            })

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};