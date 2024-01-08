const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
   
    class: {
        type: String
    },
    roll: {
        type: String
    }
});


module.exports =mongoose.model('student', employeeSchema);
