const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema ({
    email:{type: String, required: true, unique: true},
    password: {type: String}
})

module.exports = mongoose.model('user', userSchema);