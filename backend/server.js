const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const carRoutes = express.Router();
const PORT = 4000;
var config = require('../config/config');
let Car = require('./car.schema.js');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

carRoutes.route('/').get(function(req, res) {
    Car.find(function(err, cars) {
        if (err) {
            console.log(err);
        } else {
            res.json(cars);
        }
    });
});

carRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Car.findById(id, function(err, car) {
        res.json(car);
    });
});

carRoutes.route('/update/:id').post(function(req, res) {
    Car.findById(req.params.id, function(err, car) {
        if (!car)
            res.status(404).send("data is not found");
        else
            car.car_name = req.body.car_name;
        car.car_price = req.body.car_price;
        car.car_type = req.body.car_type;
        car.car_availability = req.body.car_availability;

        car.save().then(car => {
            res.json('Car updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

carRoutes.route('/add').post(function(req, res) {
    let car = new Car(req.body);
    car.save()
        .then(car => {
            res.status(200).json({'car': 'car added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new car failed');
        });
});

carRoutes.route('/delete/:id').delete(function (req, res, next) {
    Car.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
});


app.use('/cars', carRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});