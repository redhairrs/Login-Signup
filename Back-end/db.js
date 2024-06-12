const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.URI;

const connectToMongoose = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB successfully.");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
};

module.exports = connectToMongoose;