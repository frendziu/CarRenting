const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Form = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    subject:{
        type: String
    }
});

module.exports = mongoose.model('Form', Form);