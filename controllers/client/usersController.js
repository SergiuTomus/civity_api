const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models').User;
const validateRegister = require('../../validations/register');
const validateLogin = require('../../validations/login');


// @route   POST client/register
// @access  Public
exports.registerUser = (req, res, next) => {
  const { errors, isValid } = validateRegister(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    where: { email: req.body.email }
  })
    .then(user => {
      if (user) {
        return res.status(422).json({ message: "Adresa de email exista deja" });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {    // 10 - nr of salting rounds
          if (err) {
            return res.status(500).json({ message: "Parola nu este valida", error: err });
          } else {
            User.create({
              name: req.body.name,
              email: req.body.email,
              password: hash,
              phone: req.body.phone,
              delivery_address: req.body.delivery_address
            })
              .then(result => {
                res.status(201).json({
                  message: 'Contul a fost creat cu succes'
                })
              })
              .catch(err => {
                console.log("error: ", err.errors[0].message);
                if (err.errors[0].message == "Validation isEmail on email failed") {
                  return res.status(500).json({ message: "Formatul adresei de email este invalid" });
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
  const { errors, isValid } = validateLogin(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
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
          const payload = { id: user.id, email: user.email };

          jwt.sign(
            payload,
            process.env.SECRET_KEY,
            { expiresIn: "1d" },
            (err, token) => {
              return res.status(200).json({
                message: "Autentificare cu succes",
                token: 'Bearer ' + token,
                user: { name: user.name, phone: user.phone, delivery_address: user.delivery_address }
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

// @route   GET client/user
// @detail  Return current user
// @access  Private
exports.getCurrentUser = (req, res, next) => {
  res.status(200).json({
    id: req.user.id,
    user_name: req.user.name,
    email: req.user.email
  });
}