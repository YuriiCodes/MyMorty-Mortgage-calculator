const mongoose = require('mongoose');

const Bank = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    interestRate: {
        type: Number,
        required: true
    },
    maxLoan: {
        type: Number,
        required: true
    },
    minDownPayment: {
        type: Number,
        required: true
    },
    loanTerm: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Bank', Bank);

