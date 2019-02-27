const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegister = (data) => {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    console.log(data.name);

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = "Numele trebuie sa aiba intre 2 si 30 de caractere"
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = "Camp obligatoriu";
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
};

module.exports = validateRegister;