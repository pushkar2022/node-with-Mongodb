const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    // fullName: {
    //     type: String,
    //     required: 'This field is required.'
    // },
   
    userName: {
        type: String
    },
    password: {
        type: String
    }
});


module.exports =mongoose.model('User', employeeSchema);
