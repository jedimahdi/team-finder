const mongoose = require('mongoose');
const { mongo, env } = require('./vars');

mongoose.Promise = Promise;

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

if (env === 'development') {
    mongoose.set('debug', true);
}

exports.connect = () => {
    mongoose.connect(mongo.uri, {
        keepAlive: 1,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
    return mongoose.connection;
};
