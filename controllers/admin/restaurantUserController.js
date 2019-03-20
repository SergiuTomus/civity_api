const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Restaurant_User = require('../../models').Restaurant_User;
// const Restaurant = require('../../models').Restaurant;
const validateLogin = require('../../validations/login');

// @route   POST admin/login
// @access  Public
exports.loginUser = (req, res, next) => {
  const { errors, isValid } = validateLogin(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Restaurant_User.findOne({
    where: { email: req.body.email }
  })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Email sau parola incorecta'
        });
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Autentificare nereusita'
          });
        }
        if (result) {   // result == true || false
          const payload = { id: user.id, name: user.name, email: user.email };

          jwt.sign(
            payload,
            process.env.SECRET_KEY,
            { expiresIn: "1d" },
            (err, token) => {
              return res.status(200).json({
                message: "Autentificare cu succes",
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          res.status(401).json({ message: 'Email sau parola incorecta' });
        }
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// @route   GET admin/user/:userId
// @detail  Return restaurant user
// @access  Private
exports.getRestaurantUser = (req, res, next) => {
  
};
