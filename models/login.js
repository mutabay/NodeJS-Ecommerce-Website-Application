const mongoose = require('mongoose');
const { isEmail } = require('validator');

const loginSchema = mongoose.Schema({
    email: {
        type: String,
        validate: [isEmail, 'Incorrect email address format']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    }
});


module.exports = mongoose.model('Login', loginSchema);