const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = "mongodb+srv://r3habrs:8kDoXzUjcjXQ8jqh@loginsignupcluster.vsacggm.mongodb.net/?retryWrites=true&w=majority&appName=loginsignupcluster"

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