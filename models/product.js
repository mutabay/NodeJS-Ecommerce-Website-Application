const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a product name'],
        minlength: [5, 'Please enter at least 5 character for product name.'],
        maxlength: [255, 'You can enter maximum 255 character for product name.'],
        lowercase: true,
        // uppercase: true
        trim: true
    },
    price: {
        type: Number,
        required: function () {
            return this.isActive;
        },
        min: 0,
        max: 10000,
        get: value => Math.round(value), //10.2 => 10 10.8=> 11
        set: value => Math.round(value)  // 10.2 => 10 10.8=>11
    },
    description: {
        type: String,
        minlength: 10
    },
    imageUrl: String,
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags: {
        type: Array,
        validate: {
            validator: function (value) {
                return value && value.length > 0;
            },
            message: 'Please enter at least 1 tag for product.'
        }
    },
    isActive: Boolean,
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: false
        }
    ]
});

module.exports = mongoose.model('Product', productSchema);