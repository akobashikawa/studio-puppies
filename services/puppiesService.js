if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const mongoose = require('mongoose');

const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASS;
const dbhost = process.env.DB_HOST;
const dbname = process.env.DB_NAME;
const mongoDB = `mongodb://${dbuser}:${dbpassword}@${dbhost}/${dbname}`;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'dbconn: KO'));
db.once('open', function () {
    console.log('dbconn: OK');
});

const Puppy = require('../models/Puppy');

service = {};

service.getAll = async () => {
    try {
        const result = await Puppy.find();
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
};

service.getOne = async (id) => {
    try {
        const result = await Puppy.findById(id);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
};

service.create = async (data) => {
    try {
        const result = await Puppy.create(data);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}

service.update = async (id, data) => {
    try {
        const result = await Puppy.findByIdAndUpdate(id, data);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}

service.remove = async (id) => {
    try {
        const result = await Puppy.findByIdAndDelete(id);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = service;