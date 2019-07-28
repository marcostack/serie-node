const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/noderest', { useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

// comentario de teste

module.exports = mongoose;