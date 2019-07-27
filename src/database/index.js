const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.33.10:27017/noderest', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;