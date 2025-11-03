// require mongoose, a popular MongoDB library for nodejs
// Mongoose connects in the app.js file. Once mongoose is connected,
// it stays connected across all of the files in this project
// As long as you import this after you have connected,
// then mongoose will give you the active DB connection which is what we want
const mongoose = require('mongoose');

// variable to hold our Model

let DogModel = {};

/* While Mongo is a schema-less database, meaning we can just store arbitrary objects in it,
  Mongoose does implement a schema system. If you wanted to just store arbitrary objects you
  could just use the mongoDB NodeJS driver: https://www.npmjs.com/package/mongodb

  Information about the differences between MongoDB Driver and Mongoose found here:
  https://www.mongodb.com/developer/article/mongoose-versus-nodejs-driver/

*/
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});
// Create the cat model based on the schema. You provide it with a custom discriminator
// (the name of the object type. Can be anything)
// and the schema to make a model from.
// Look at the model variable definition above for more details.
DogModel = mongoose.model('Dog', DogSchema);

// We only want to export the dog model, so we can overwrite the entire exports object.
module.exports = DogModel;
