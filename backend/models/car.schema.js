const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Car = new Schema({
    car_name: {
        type: String
    },
    car_price: {
        type: String
    },
    car_type: {
        type: String
    },
    car_availability:{
        type: String
    }
});

module.exports = mongoose.model('Car', Car);